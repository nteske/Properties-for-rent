import { Component, OnInit } from '@angular/core';
//putanje
import { Router } from '@angular/router';
//servisi
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public isCollapsed = false;//da li je navbar spusten
  message:number;//aktiviranje ponovnog ucitavanja
  public wait=false;//cekaj za poruku
  public users={name:'',fullname:'',email:'',username:'',admin:0};
  public url='';//url avatara
  constructor(private router: Router,private userSer:UserService) { }

  ngOnInit() {
    //ako primi poruku za ponovo ucitavanje
    this.userSer.currentMessage.subscribe(message => 
    {
      //kada primi poruku
      this.message = message;
      //aktivira zastavicu
    if(this.message==1){this.message=0;this.wait=false;}
  });
  }


  isLoggedIn() {
    //ako je prijavljen
     if(this.userSer.isLoggedIn())
     {
       //ako je zastavica podesena na ponovo ucitavanje
      if(this.wait==false){
      this.wait=true;//zaustavi ucitavanje
      //ucitaj korisnika
      this.userSer.getSettings().subscribe(
        data => {
          this.users.name=data.user.name;
          this.users.fullname=data.user.name+' '+data.user.last;
          this.users.email=data.user.email;
          this.users.username=data.user.userName;
          this.url=this.userSer.getAvatarURL(data.user.avatar);
          this.users.admin=data.user.admin;
        });
      }
      //vrati da je prijavljen
      return true;
     }else return false;
  }
  //ocisti navbar od podataka korisnika
  clearDataOfUser()
  {
    this.users.name='';
    this.users.fullname='';
    this.users.email='';
    this.users.username='';
    this.url=this.userSer.getAvatarURL('');
  }
  //kada odabere dugme za odjavljivanje
  logOut(){
    this.userSer.logout();
    //saljemo ga na rutu za prijavljivanje
    this.router.navigate(['/users/login']);
    this.wait=false;
    this.clearDataOfUser();
  }

  //ruta za prikaz svog profila
  goToProfile()
  {this.router.navigate(['/users/profile/',this.users.username]);}
}
