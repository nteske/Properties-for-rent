import { Component, OnInit } from '@angular/core';
//obrada rute i parametara
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
//korisnicki servis
import { UserService } from '../../services/user.service';
//model
import { User } from '../../model/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public taken;//parametar putanje
  public url;//url slike
  public star=0;//rating zvezdica
  public users:User;//korisnikovi podaci
  public me=null//da li je to njegov profil
  public isDataLoaded=false;//da li su podaci ucitani
  constructor(private router: Router,private route: ActivatedRoute,private userSer:UserService) { }
  ngOnInit() {
    //uzimamo parametar url adresa
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.taken = params.get('username');
      //podatke korisnikovog profila
      this.userSer.getProfile(this.taken).subscribe(
        data => {
          //ukoliko ima ocen u dolelicemo je
            if(data.star!=null)
            this.star=data.star;
            //ucitavamo licne podatke
            this.users=data.user;
            //da li je u pitanju korisnik ciji je profil
            this.me=data.me;
            //uzimamo celu url adresu slike
            this.url=this.userSer.getAvatarURL(this.users.avatar);
            //ako nema druge adrese ispisacemo none
            if(this.users.street2==null)this.users.street2='none';
            this.isDataLoaded=true;
    });
  });

}
//u slucaju da je u pitanju isti korisnik prikazujemo dugme za editovanje profila
itIsMe(){return this.users.userName==this.me;}

//to dugme vodi na putanju za editovanje profila
settings(){this.router.navigate(['/users/settings']);}

}
