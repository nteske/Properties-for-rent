import { Component, OnInit } from '@angular/core';
//putanje
import { Router } from '@angular/router';
//servisi
import { AdminService } from'../../services/admin.service';
//modeli
import { Property } from'../../model/property.model';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {
  public properties:Property[];//niz apartmana
  constructor(private adSr:AdminService,private router: Router) { }

  ngOnInit() {
    //ucitavmao niz apartmana
    this.adSr.getPropeties().subscribe(data=>{
      this.properties=data.obj;
    });
  }

  //putanja prema apartmanu
  showProperty(prop){this.router.navigate(['/properties/view',prop._id]);}

  //brisanje apartmana
  deleteProp(prop){
    //brisanje sa sarvera
    this.adSr.deleteProp(prop).subscribe();
    //brisanje iz niza za prikaz
    var index = this.properties.indexOf(prop);
    if (index > -1) {
      this.properties.splice(index, 1);
    }
  }
}
