import { Component, OnInit } from '@angular/core';
//putanje
import { Router } from '@angular/router';
//servisi
import { AdminService } from'../../services/admin.service';
//modeli
import { User } from'../../model/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  public users:User[];//niz korisnika
  public status;//admin status
  constructor(private adSr:AdminService,private router: Router) { }

  ngOnInit() {
    //uzimamo niz korisnika sa servera i status
    this.adSr.getUsers().subscribe(data=>{
      this.users=data.obj;
      this.status=data.status;
    });
  }

  //banovanje korisnika
  banUser(user)
  {
    //promena statusa bana
    if(user.banned==true)user.banned=false;else user.banned=true;
    this.adSr.setBan(user).subscribe();
  }
  //dodela admina
  setAdmin(user,num)
  {
    //ako vec ima admina da mu se oduzme
    if(user.admin==num)user.admin=0;else user.admin=num;
    this.adSr.setData(user).subscribe();
  }

  //putanja prema korisnickom profilu
  showProfile(username){this.router.navigate(['/users/profile',username]);}

}
