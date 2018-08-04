////////////////////////////Sema apartmana///////////////////////////////

//moduli
const mongoose=require('mongoose');

//baza podataka
const config=require('../config/database');

//radi integracije s korisnickom semom
var Schema = mongoose.Schema;

//apartman sema podataka
const PropertySchema = mongoose.Schema({
    //vlasnik
    user: {type: Schema.Types.ObjectId, ref: 'User',required:true},
    //osnovni podaci
    title:{type:String, default:'nothing'},
    deposit:{type:Number,required:true},
    rooms:{type:Number,required:true},
    area:{type:Number,required:true},
    street:{type:String, default:'nothing'},
    //slike apartmana
    image1:{type:String, default:'no'},
    image2:{type:String, default:'no'},
    image3:{type:String, default:'no'},
    image4:{type:String, default:'no'},
    //ikonice apartmana
    internet:{type:Boolean,default:false},
    cableTV:{type:Boolean,default:false},
    bBed:{type:Boolean,default:false},
    sBed:{type:Boolean,default:false},
    stove:{type:Boolean,default:false},
    washer:{type:Boolean,default:false},
    landline:{type:Boolean,default:false},
    fridge:{type:Boolean,default:false},
    fireplace:{type:Boolean,default:false},
    bathub:{type:Boolean,default:false},
    conditioner:{type:Boolean,default:false},
    microwave:{type:Boolean,default:false},
    //datum kreiranja
    date: {type: Date,default: Date.now},
});

////////////////////////////Eksportovanje seme apartmana///////////////////////////////

const Property=module.exports=mongoose.model('Property',PropertySchema);

////////////////////////////Metode za rad nad podacima///////////////////////////////

//trazimo apartman po njegovom idiju u bazi
module.exports.getPropertyById=function(id,callback){
    Property.findById(id,callback);
}

//sacuvavamo modifikovani apartman
module.exports.saveModPropery=function(id,property,callback){
    var query = { _id: id };
    Property.findOneAndUpdate(query,property,callback);
}

//trazimo apartmane odredjenog korisnika
module.exports.findUserPropertys=function(id,callback){
    Property.find({"user":id}).populate().exec(callback);
}

//trazimo sve apartmane
module.exports.findAllProperties=function(query,callback){
    if(query.title!=undefined)//proveravamo dal i je vrsena pretraga
    //ako jeste dodajemo karaktere koji ce traziti svaki naslov koji je slican unesenom
        query.title={ '$regex' : query.title, '$options' : 'i' }  ;
    Property.find(query).populate().exec(callback);
}

//dodajemo novi apartman
module.exports.addPropery=function(property,callback){
    property.save(callback);
}
