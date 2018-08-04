import { Component, OnInit } from '@angular/core';
//obrada forme i rutiranje
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//servisi
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
//modeli
import { User } from '../../model/user.model';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  //kreiranje for e
  form: FormGroup;
  public url="";//url adresa slike
  public mistake=false;//ako je korisnik uneo pogresan file format
  fileToUpload: File = null;//unet file
  public isDataLoaded=false;//da li su podaci ucitani
  constructor(private router: Router,private userSer:UserService,private toastr: ToastrService) { }
  
  ngOnInit() {
    //uzimamo informacije korisnika
    this.userSer.getSettings().subscribe(
      data => {
        //inicijalizujemo vrednosti inputa s tim podacima
          this.form = new FormGroup({
            firstName: new FormControl(data.user.name, [Validators.required,Validators.minLength(3)]),
            lastName: new FormControl(data.user.last, [Validators.required,Validators.minLength(3)]),
            userName: new FormControl(data.user.userName, [Validators.required,Validators.minLength(5)]),
            email: new FormControl(data.user.email, [Validators.required,Validators.minLength(5),Validators.email]),
            phone: new FormControl(data.user.phone, [Validators.required,Validators.minLength(5)]),
            street: new FormControl(data.user.street, [Validators.required,Validators.minLength(5)]),
            street2: new FormControl(data.user.street2),
            password: new FormControl(null, [Validators.required,Validators.minLength(8)]),

        });
        //url adresa njegove slike
        this.url=this.userSer.getAvatarURL(data.user.avatar);
          this.isDataLoaded=true;
  });
  }
  //kada korisnik dodaje novu sliku
  onImageAdded(event) {
    //pravimo privremenu promenjivu
    var temp= event.target.files[0];
    //proveravamo da li je odgovarajuceg formata
    if(temp!=undefined)
    //ako nije
    if(temp.type.split('/')[0]!="image")this.mistake=true;
    else{//ako jeste dodeljujemo je promenjivoj za upload
      this.fileToUpload = event.target.files[0];
      //prezentujemo je korisniku
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.mistake=false;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}

//putanja za promenu sifre
  GoForPassword(){this.router.navigate(['/users/password']);}

  //potvrda menjana podataka
  onSubmit() {
    //uzimamo datke podatke u obliku modela Usera
    const user = new User(
      this.form.value.email,
      this.form.value.password,
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.userName.toLowerCase(),
      this.form.value.phone,
      this.form.value.street,
      this.form.value.street2,
  );
  //prosledjujemo ih serveru
  this.userSer.setSettings(user,this.fileToUpload).subscribe(data => {  
    //obavestavamo heder da je doslo do izmene
    this.userSer.changeMessage(1);
    //vracamo se na profilnu rutu
    this.router.navigate(['/users/profile/'+data.user.toString()]);
  });
  }

}
