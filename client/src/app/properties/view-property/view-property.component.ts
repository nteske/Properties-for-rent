import { Component, OnInit } from '@angular/core';
//putanje
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
//servisi
import { PropertyService } from '../../services/property.service';
import { UserService } from '../../services/user.service';
import { RateService } from '../../services/rate.service';
//modeli
import { Property } from '../../model/property.model';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  //ikonice
  public iconURL=['',"../../../assets/icons/B-wireless-network.png",
  "../../../assets/icons/B-hdtv.png",
  "../../../assets/icons/B-bed.png",
  "../../../assets/icons/B-single-bed.png",
  
  "../../../assets/icons/B-air-conditioner.png",
  "../../../assets/icons/B-fridge.png",
  "../../../assets/icons/B-stove-oven.png",
  "../../../assets/icons/B-washing-machine.png",
  
  "../../../assets/icons/B-bathtub.png",
  "../../../assets/icons/B-microwave.png",
  "../../../assets/icons/B-landline.png",
  "../../../assets/icons/B-fireplace.png"
];
public taken;//parametar putanje
public isClicked=[];//da li je ikonica aktivna
public url;//url slike
public isDataLoaded=false;//jesu li podaci ucitani
public images=[];//slike apartmana
public pos=0;//pozicija u galeriji
public property;//podaci apartmani
public watcher:string;//korisnik koji gleda apartman
public activ=null;//da li su podaci smao jednom ucitani
public star=0;//ucitana ocena
  constructor(private router: Router,private rateSr: RateService,private route: ActivatedRoute,private propSer:PropertyService,private userSer:UserService) { }
  ngOnInit() {
    //uzimamo id iz putanje
    this.route.paramMap.subscribe((params:ParamMap) => {
    this.taken = params.get('id');
    //podatke apartmana
    this.propSer.viewProperty(this.taken).subscribe(
      data => {
        //ucitavamo objekat apartmana
          this.property=data.prop;
          this.property.user=data.user;
          //aktiviramo ikonice
          this.isClicked[1]=data.prop.internet,
          this.isClicked[2]=data.prop.cableTV,
          this.isClicked[3]=data.prop.bBed,
          this.isClicked[4]=data.prop.sBed,
          this.isClicked[5]=data.prop.conditioner,
          this.isClicked[6]=data.prop.fridge,
          this.isClicked[7]=data.prop.stove,
          this.isClicked[8]=data.prop.washer,
          this.isClicked[9]=data.prop.bathub,
          this.isClicked[10]=data.prop.microwave,
          this.isClicked[11]=data.prop.landline,
          this.isClicked[12]=data.prop.fireplace,
          //postavljamo url za prikaz slika
          this.url="/uploads/avatars/"+this.property.user.avatar;
          if(this.property.image1!="no")
          this.images.push(this.propSer.getImateUrl(this.property.image1));
          if(this.property.image2!="no")
          this.images.push(this.propSer.getImateUrl(this.property.image2));
          if(this.property.image3!="no")
          this.images.push(this.propSer.getImateUrl(this.property.image3));
          if(this.property.image4!="no")
          this.images.push(this.propSer.getImateUrl(this.property.image4));
          if(this.images.length==0)
          this.images.push(this.propSer.getImateUrl("no"));
          this.isDataLoaded=true;

  });
    });
  }
  //kada korisnik dodeli ocenu
  onRatingChange(data){this.rateSr.postStars({"id":this.property.user._id,"num":data.rating}).subscribe();}
  
  //klik levo na galeriji
  left(){if(this.pos==0){this.pos=this.images.length-1;}else this.pos=this.pos-1;}
  
  //klik desno na galeriji
  right(){if(this.pos==this.images.length-1){this.pos=0;}else this.pos=this.pos+1;}

  //proveravamo da li je korisnik logovan da omogucimo ocenjivanje
  isLoggedIn()
  {
    //ako je logovan
     if(this.userSer.isLoggedIn())
     {
       //ucitavamo jednom vec dodeljenu ocenu
       if(this.activ==null&&this.property.user._id!=undefined){
        this.activ=1;
        //ucitavamo dodeljenu ocenu
        this.rateSr.getStars(this.property.user._id).subscribe(data=>{
          this.watcher=data.id;
          this.star=data.star;
        });
      }
      //ako ne gleda sopstveni apartman (ne moze sam sebe oceniti)
      if(this.watcher!=this.property.user._id)return true;
      //ako gleda svoj
      else return false;
     }else return false;
  }

  //putanja ka vlasniku apartmana
  goToProfile(){this.router.navigate(['/users/profile/',this.property.user.userName]);}

  //provera da li je ikonica aktivna
  isActive(num){return this.isClicked[num]==true;}

}
