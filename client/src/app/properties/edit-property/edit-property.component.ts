import { Component, OnInit } from '@angular/core';
//rutovanje s parametrima
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
//servisi
import { PropertyService } from '../../services/property.service';
import { ToastrService } from 'ngx-toastr';
//modeli
import { Property } from '../../model/property.model';

@Component({
  selector: 'app-edit-property',
  //kreiramo dete s informacijama o apartmana i eventom za prijem podataka
  template: `
    <app-property-form *ngIf="loaded" [prop]="property" (event)="sendData($event)"></app-property-form>
  `,
  styles: []
})
export class EditPropertyComponent implements OnInit {
  public taken;//id apartmana
  public property:Property;//apartman
  public loaded=false;//da li su podaci ucitani
  constructor(private propSer:PropertyService,private router: Router,private route: ActivatedRoute,private toastr: ToastrService) { }
  
  ngOnInit() {
    //uzimamo id apartmana iz putanje
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.taken = params.get('id');
      //saljemo serveru zahtev za podatke o apartmanu
      this.propSer.editProperty(this.taken).subscribe(
        data => {
          //ucitavamo te podatke i javljamo da su podaci ucitani
            this.property=data.prop;
            this.loaded=true;

        });
    });
  }

  //kada primimo podatke od forme
  sendData(data)
  {
    //menjamo informacije o apartmanu
    this.property=data.property;
    //uzimamo prosledjene fajlove
    var fileToUpload: File[]=data.files;
    //saljemo serveru zahtev da promeni informacije o apartmanu
    this.propSer.saveProperty(this.taken,this.property,fileToUpload[1],fileToUpload[2],fileToUpload[3],fileToUpload[4]).subscribe(data => {
        //obavestavamo korisnika
        this.toastr.success('apartment saved','',{
          closeButton:true,
          positionClass:'toast-bottom-right'
        });
        //saljemo komponenti za apartmane informaciju da ponovo ucita apartmane
        this.propSer.changeMessage(1);
        //saljemo korisnika na datu putanju
        this.router.navigate(['/users/property']);
    });
  }

}
