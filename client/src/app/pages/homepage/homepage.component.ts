import { Component, OnInit } from '@angular/core';
//putanje
import { Router } from '@angular/router';
//servisi
import { PropertyService } from '../../services/property.service';
//modeli
import { Property } from '../../model/property.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  properties:Property[];//niz apartmana
  toShow:Property[];//niz apartmana za prikaz
  public number=[];//broj podskupova
  public onNum=0;//na kom je broju
  public biggest;//koji je krajni broj
  public sort=1;//koji je sort
  constructor(private propSer:PropertyService,private router: Router) { }

  //pretraga apartmana
  goSearch(data)
  {
    this.properties.length=0;
    //uzimamo sve apartmane s slicnim naslovom
    this.propSer.getAllProperties({params:{ title:data.target.value.toString() }}).subscribe(data => {
        //upisujemo ih u niz
        this.properties=data.obj;
        //sortiramo
        this.sortList();
        this.createList();
      });
  }

  //delimo skup na sledecih devet
  sliceon(num)
  {
    this.onNum=num;
    let prop=this.properties;
    this.toShow=prop.slice(9*(num-1), (9*num));
  }

  //da li ima dovoljo apartmana za podelu na skupove
  isThereAList(){return this.number.length!=0;}

  //promena boje za broj skupa
  isActive(num){return this.onNum==num;}

  OneLeft()//kada klikne na dugme za levi skup
  {if(this.onNum==1)return;else this.sliceon(this.onNum-1);}

  OneRight()//kada klikne na dugme za desni skup
  {if(this.onNum==this.biggest)return;else this.sliceon(this.onNum+1);}

  createList(){
    //delimo listu na po 9 apartmana za prikaz
    if(this.properties.length>9)
    {
      let prop=this.properties;
      this.toShow=prop.slice(0, 9);
      this.biggest=Math.ceil(this.properties.length/9);
      this.onNum=1;
      this.number.length=0;
      for (var i = 1; i <= this.biggest; i++)this.number.push(i);
    }
    else {
    this.onNum=0;
    this.toShow=this.properties;
    this.number.length=0;}
  }
  ngOnInit() {
    //ucitavamo listu apartmana
    this.propSer.getAllProperties({params:{}}).subscribe(data => {
      this.properties=data.obj;
      //sortiramo listu
      this.sortList();
      this.createList();
    });
  }

  //putanja ka apartmanu
  goForProp(prop){this.router.navigate(['/properties/view',prop._id]);}

  //koji je sort korisnik odabrao
  sorting(data)
  {
    if(data.target.value=="Date - newest")this.sort=1;
    else if(data.target.value=="Date - oldest")this.sort=2;
    else if(data.target.value=="Price - low to high")this.sort=3;
    else if(data.target.value=="Price - high to low")this.sort=4;
    else this.sort=1;
    //sortiraj listu
    this.sortList();
    this.createList();
  }
  //sortiranje niza apartmana
  sortList()
  {
    //sirtiranje prema datumu od najnovijeg
    if(this.sort==1)
    this.properties=this.properties.sort((obj1, obj2) => {
      var d1 = new Date(obj1.date);var d2 = new Date(obj2.date);
      if (d1.getTime() > d2.getTime())return -1;
      if (d1.getTime() < d2.getTime())return 1;
    return 0;
    });
    //sortiranje prema datumu od najstarijeg
    if(this.sort==2)
    this.properties=this.properties.sort((obj1, obj2) => {
      var d1 = new Date(obj1.date);var d2 = new Date(obj2.date);
      if (d1.getTime() > d2.getTime())return 1;
    if (d1.getTime() < d2.getTime())return -1;
    return 0;
    });
    //sortiranje prema novcu od najeftinijih
    if(this.sort==3)
    this.properties=this.properties.sort((obj1, obj2) => {
      if (obj1.deposit > obj2.deposit)return 1;
      if (obj1.deposit < obj2.deposit)return -1;
    return 0;
    });
    //sortiranje prema novcu od najskupljih
    if(this.sort==4)
    this.properties=this.properties.sort((obj1, obj2) => {
      if (obj1.deposit > obj2.deposit)return -1;
      if (obj1.deposit < obj2.deposit)return 1;
    return 0;
    });

  }

  //pocetna slika apartmana
  getImage(prop)
  {
    var urlToImg;
    if(prop.image1!="no")urlToImg=prop.image1;
    else if(prop.image2!="no")urlToImg=prop.image2;
    else if(prop.image3!="no")urlToImg=prop.image3;
    else if(prop.image4!="no")urlToImg=prop.image4;
    else urlToImg="no";
    //vracamo url slike
    return this.propSer.getImateUrl(urlToImg);
  }

}
