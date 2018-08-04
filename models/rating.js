////////////////////////////Sema za ocenjivanje///////////////////////////////

//moduli
const mongoose=require('mongoose');

//baza podataka
const config=require('../config/database');

//radi integracije s korisnickom semom
var Schema = mongoose.Schema;

//rating sema podataka
const RatingSchema = mongoose.Schema({
    //osoba koja je dodelila ocenu
    user: {type: Schema.Types.ObjectId, ref: 'User',required:true},
    //ocena
    rate:{type:Number,default:0},
    //osoba kojoj je ocena dodeljena
    target:{type: Schema.Types.ObjectId, ref: 'User',required:true},
});

////////////////////////////Eksportovanje rating seme///////////////////////////////

const Rating=module.exports=mongoose.model('Rating',RatingSchema);

////////////////////////////Metode za rad nad podacima///////////////////////////////

//trazimo ocenu po njenom idiju u bazi
module.exports.getRatingById=function(id,callback){
    Rating.findById(id,callback);
}

//trazimo ocenu na osnovu korisnika koji ju je dodelio i kome ju je dodelio
module.exports.getStar=function(id,id2,callback){
    Rating.findOne({user:id,target:id2},callback);
}

//trazimo sve ocene koje su dodeljene datoj osobi
module.exports.findMine=function(id,callback){
    Rating.find({target:id}).populate().exec(callback);
}

//dodela nove ocene
module.exports.setStar=function(id,id2,num,callback){
    //proveravamo da li ocena vec postoji
    Rating.findOne({user:id,target:id2},(err,star)=>{
        if(err)throw err;
        //ako postoji menjamo je
        if(star){star.rate=num;star.save(callback);}
        //ako ne postoji pravimo novu
        else{
            //i sacuvavamo je
            var star=new Rating({user:id,rate:num,target:id2});
            star.save(callback);
        }
    });
}