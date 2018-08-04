import { Component, OnInit } from '@angular/core';
//rutovanje
import { Router } from '@angular/router';
//modeli
import { Property } from "../../model/property.model";
//servisi
import { UserService } from '../../services/user.service';
import { PropertyService } from '../../services/property.service';


@Component({
  selector: 'app-my-property',
  templateUrl: './my-property.component.html',
  styleUrls: ['./my-property.component.css']
})
export class MyPropertyComponent implements OnInit {
  //niz objekata apartmana
  public propArray:Property[];
  //kada se vracamo s add ili edita
  readData=1;
  constructor(private propSer:PropertyService,private router: Router,private userSer:UserService) { }

  ngOnInit() {
    //proveravamo da li je korisnik dodao ili izmenio apartman
    this.propSer.currentMessage.subscribe(message => 
      {
        //ako jeste ponovo ucitavamo podatke
        if(message==1){
          this.readData=1;
          this.getData();
        }
      });
      //ucitavamo podatke prvi put
      this.getData();
  }

  //ucitavanje podataka niza korisnikovih apartmana
  getData(){
    if(this.readData==1){
      this.readData=0;
      this.userSer.getProperties().subscribe(data =>{this.propArray=data.obj;});
    }
  }

  //brisanje apartmana
  deleteProp(prop){
    //brisemo ga iz baze podataka
    this.propSer.deleteProperty(prop._id).subscribe();
    //i iz niza koji je prikazan korisniku
    var index = this.propArray.indexOf(prop);
    if (index > -1) {
      this.propArray.splice(index, 1);
    }
  }
  //trazimo prvi sliku u partmanu
  getImage(prop)
  {
    var urlToImg;
    if(prop.image1!="no")urlToImg=prop.image1;
    else if(prop.image2!="no")urlToImg=prop.image2;
    else if(prop.image3!="no")urlToImg=prop.image3;
    else if(prop.image4!="no")urlToImg=prop.image4;
    else urlToImg="no";
    //vracamo njen URL
    return this.propSer.getImateUrl(urlToImg);
  }

  //metode koje vode ka drugim putanjama
  viewProp(prop)
  {
    this.router.navigate(['/properties/view',prop._id]);
  }

  editProp(prop)
  {
    this.router.navigate(['/properties/edit',prop._id]);
  }

  goForNew()
  {
    this.router.navigate(['/properties/add']);
  }

}
