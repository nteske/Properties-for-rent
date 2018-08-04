import { Component, OnInit } from '@angular/core';
//upravjanje formama i rutovanje
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//servisi
import { UserService } from '../../services/user.service';
//modeli
import { User } from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //kreiranje forme
  form: FormGroup;
  constructor(private router: Router,private userSer:UserService) { }

  ngOnInit() {
    //inicijalizovanje null vrednosti inputa i validancija
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      userName: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      cpassword: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.email]),
      phone: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      street: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      street2: new FormControl(null),
  });
  }


  onSubmit() {
    //kreiranje objekta
    const user = new User(
      this.form.value.email,
      this.form.value.password,
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.userName.toLowerCase(),
      this.form.value.phone,
      this.form.value.street,
      this.form.value.street2
  );
  //poziv putanje za registraciju korisnika
  this.userSer.register(user).subscribe();
    //resetujemo inpute
    this.form.reset();
    //saljemo korisnika da se loguke
    this.router.navigate(['/users/login']);
  }

}
