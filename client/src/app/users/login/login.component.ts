import { Component, OnInit } from '@angular/core';
//upravjanje formama i rutovanje
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//servisi
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
//modeli
import { User } from '../../model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //kreiranje formgrupe
  form: FormGroup;

  constructor(private router: Router,private userSer:UserService,private toastr: ToastrService) { }

  ngOnInit() {
    //dodela inicijalne vrednosti i validacija
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(3)]),
    });
  }
  //kada korisnik pritisne dugme za prijavu
  onSubmit()
  {
    const user = new User(this.form.value.email, this.form.value.password);
    //pozivamo login s datim podacima
    this.userSer.login(user)
        .subscribe(
            //kada primimo podatke
            data => {
                //resetujemo inpute forme
                this.form.reset();
                //upisujemo korisniku token
                localStorage.setItem('token', data.token);
                //obavestavamo o uspesnom prijavljivanju
                this.toastr.success('Log in successful!','',{
                  closeButton:true,
                  positionClass:'toast-bottom-right'
                });
                //saljemo ga na homepage
                 this.router.navigate(['/']);
            });
  }

}
