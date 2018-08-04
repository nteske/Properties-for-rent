import { Component, OnInit } from '@angular/core';
//ruter
import { Router } from '@angular/router';
//servisi
import { PropertyService } from '../../services/property.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-property',
  //dodavanje deteta s eventom prijema podataka
  template: `
  <app-property-form (event)="sendData($event)"></app-property-form>
  `,
  styles: ['']
})
export class AddPropertyComponent implements OnInit {


constructor(private propSer:PropertyService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {}

  //kada forma posalje podatke
  sendData(data)
  {
    //uzimamo podatke apartmana i fajlove za upload
    const property=data.property;
    var fileToUpload: File[]=data.files;

    //saljemo podatke s fajlovima serveru
    this.propSer.addProperty(property,fileToUpload[1],fileToUpload[2],fileToUpload[3],fileToUpload[4]).subscribe(data=>{
        //obavestavamo korisnika
        this.toastr.success('apartment created','',{
          closeButton:true,
          positionClass:'toast-bottom-right'
        });
        //saljemo komponenti za prikaz apartmana informaciju da je doslo do promene
        this.propSer.changeMessage(1);
        //saljemo korisnika na tu putanju
        this.router.navigate(['/users/property']);
    });
  }

}
