////////////////////////////Korisnicka sema///////////////////////////////

//moduli
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

//baza podataka
const config=require('../config/database');

//korisnicka sema podataka
const UserSchema = mongoose.Schema({
    //email i sifra
    email:{type:String,required:true,unique: true},
    password:{type:String,required:true},
    //ime prezime i username
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,required:true,unique: true},
    //mobilni telefon
    phone:{type:String,required:true,unique: true},
    //mesto prebivalista
    street:{type:String,required:true},
    street2:{type:String},
    //slika
    avatar:{type:String, default:'no'},
    //admin i ban status
    admin:{type:Number,default:0},
    banned:{type:Boolean,default:false},
});

////////////////////////////Eksportovanje korisnicke seme///////////////////////////////

const User=module.exports=mongoose.model('User',UserSchema);

////////////////////////////Metode za rad nad podacima///////////////////////////////
//pretraga korisnika
module.exports.getUserById=function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByUserEmail=function(email,callback){
    const query={email:email};
    User.findOne(query,callback);
}

module.exports.getUserByUserName=function(userName,callback){
    const query={userName:userName};
    User.findOne(query,callback);
}

//postavljanje nove sifre
module.exports.updatePass=function(newUserData,callback){
    User.findOne({_id: newUserData._id}, function (err, user) {
        user.password= newUserData.password;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                if(err)throw err;
                user.password=hash;
                user.save(callback);
            });
        });
    });
}

//promena korisnickih informacija
module.exports.updateOne=function(newUserData,callback){
    User.findOneAndUpdate({_id:newUserData._id}, newUserData, callback);
}

//vracanje svih korisnika
module.exports.findAllUsers=function(callback){
    User.find().populate().exec(callback);
}

//dodavanje novog korisnika
module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}

//poredjenje sifri
module.exports.comparePassword=function(candidatePass,hash,callback){
bcrypt.compare(candidatePass,hash,(err,isMatch)=>{
    if(err)throw err;
    callback(null,isMatch);
});
}