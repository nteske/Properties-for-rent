import { Component, OnInit } from '@angular/core';
//upravljanje formom i rutiranje
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//servisi
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  //kreiranje forme
  form: FormGroup;
  constructor(private router: Router,private userSer:UserService,private toastr: ToastrService) { }

  ngOnInit() {
    //inicijalizovanje null vrednosti za inpute i validaicja
    this.form = new FormGroup({
      oldpassword: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      cpassword: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    });
  }
  //kada korisnik pritisne submit
  onSubmit()
  {
  //uzimamo staru i novu sifru
    var data ={
      old:this.form.value.oldpassword,
      new:this.form.value.password,
    };
  //prosledjujemo ih serveru
  this.userSer.changePass(data).subscribe(data => {
    //kada on odgovori obavestavamo korisnila
      this.toastr.success("Password changed!",'',{
        closeButton:true,
        positionClass:'toast-bottom-right'
      });
    //i zahtevamo da se ponovo prijavi
    this.userSer.logout();
    this.router.navigate(['/users/login']);
  });
  }

}
