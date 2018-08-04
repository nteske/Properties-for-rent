////////////////////////////Postavke users rute///////////////////////////////

//Ucitavanje modula za rutiranje
const express=require('express');
const router=express.Router();

//korisnicki podaci i njihova obrada
const jwt=require('jsonwebtoken');
const passport=require('passport');
const config=require('../config/database');

//seme sa podacima
const User=require('../models/user');
const Rating=require('../models/rating');
const Property=require('../models/property');

//sacuvavanje i obrada fajlova
const fs = require('fs');
const multer  = require('multer');
const crypto = require('crypto');
const path=require('path');

//online cloud za slike
const cloudinary = require('../config/cludinary');

//storage za sacuvavanje slika
var storage = multer.diskStorage({
    //folder za sacuvavanje
    destination: function (req, file, cb) {
      cb(null, './uploads/avatars')
    },
    //naziv fajla
    filename: function (req, file, cb) {
        //generisanje imena i dodavanje ekestenzije
        crypto.pseudoRandomBytes(16, function (err, raw) {
            //uzimamo ekstenziju od uploadovanog fajla
            var ext= file.originalname.split('.').pop();
            //spajamo generisano ime s vremon kreiranja (radi sigurnosti) i ekstenzijom
            cb(null, raw.toString('hex') + Date.now() + '.' + ext);
          });
    }
  })
//dodeljivanje prethodno postavljenih podesavanja multeru   
var upload = multer({ storage: storage });

////////////////////////////Rute za setovanje korisnika///////////////////////////////

//registrovanje korisnika
router.post('/register',(req,res,next)=>{
    //kreiranje korisnickog modela
    let newUser=new User(req.body);
    //dodavanje korisnika
    User.addUser(newUser,(err)=>{
        if(err){
            if (err.name === 'MongoError' && err.code === 11000)//mongodb greska
                return res.status(409).send('User already exist!');
            else 
                return res.status(500).send("Failed to register!");
        }
         return res.status(201).send("User created!");
    });
});

//logovanje korisnika
router.post('/login',(req,res,next)=>{
    //uneti podaci
    const email=req.body.email;
    const password=req.body.password;
    //trazimo korisnika
    User.getUserByUserEmail(email,(err,user)=>{
        if(err)
            return res.status(500).send("Server error!");
        if(!user)
            return res.status(422).send("User not found");
        if(user.banned==true)
            return res.status(400).send("You are banned!");
        //poredimo sifre
        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err)
                return res.status(500).send("Server error!");
            if(isMatch){
                //kreiranje tokena i njegovo slanje korisniku
                const token = jwt.sign({data: user} ,config.secret, {expiresIn: 604800});
                return res.status(200).json({token:'Bearer '+token,user:{name:user.firstName,last:user.lastName,userName:user.userName,email:user.email}});
            }else//ako se sifre ne slazu obavestavamo korisnika o tome
                return res.status(400).send("Wrong password");
        });
    });
});

//pregledavanje profila
router.get('/profile/:username',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //trazimo korisnika prema korisnickom imenu
    User.getUserByUserName(req.params.username,(err,user)=>{
        if(err)
            return res.status(500).send("Server error!");
        if(!user)
            return res.status(422).send("User not found");
        if(user){
            //racunamo korisnikovu ukupnu ocenu
            var cal=0;
            Rating.findMine(user._id,(err,rating)=>{
                if(err)
                    return res.status(500).send("Server error!");
                //racunanje srednje vrednosti
                var sum=0;var num=0;
                for(var i=0;i<rating.length;i++)
                    if(rating[i].rate!=0){sum=sum+rating[i].rate; num=num+1;}
                cal=sum/num;
                //odgovor korisniku
                return res.status(200).json ({star:cal,user:{firstName:user.firstName,lastName:user.lastName,userName:user.userName,email:user.email,phone:user.phone,
                street:user.street,street2:user.street2,avatar:user.avatar},me:req.user.userName});
            });
        }
    });
    }
);

//uvid i korisnikova podesavanja
router.get('/settings',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    user=req.user;
    //prikaz njegovih podataka
    return res.status(200).json ({user:{id:user._id,name:user.firstName,last:user.lastName,userName:user.userName,email:user.email,phone:user.phone,
        street:user.street,street2:user.street2,avatar:user.avatar,admin:user.admin}});    
});
    
//promena korisnicke sifre
router.post('/password',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //proveravamo unetu staru sifru s pstojecom
    User.comparePassword(req.body.old.toString(),req.user.password.toString(),(err,isMatch)=>{
        if(err)
            return res.status(500).json("Server error!");
        //ako se slazu
        if(isMatch){
            req.user.password=req.body.new;
            //menjamo sifru
            User.updatePass(req.user,(err,newData)=>{
                if(err)
                    return res.status(500).send("Server error!");
                });
            return res.status(200).send("Password changed!");
        }else//ako se ne slazu
            return res.status(400).send("Wrong password");
    });
});

//primena postavki profila, sa dodavanjem nove slike
router.post('/settings',upload.single('avatar'),passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //podaci koje je korisnik izmenio
    let newData=JSON.parse(req.body.thisUser);
    newData._id=req.user._id;
    //gledamo da li je uneo tacnu sifru
    User.comparePassword(newData.password.toString(),req.user.password.toString(),(err,isMatch)=>{
        if(err)
            return res.status(500).send("Server error!");
        //ako se sifre poklapaju
        if(isMatch){
            //ako je korisnik odlucio da promeni sliku
            if(req.file!=undefined){
                //pamtimo novi generisani naziv slike
                newData.avatar=req.file.filename;
                //radimo backup slike
                cloudinary.v2.uploader.upload("./uploads/avatars/"+req.file.filename,{ use_filename: true, unique_filename: false });
                if(req.user.avatar!='no')//brisemo staru iz memorije ako postoji
                {
                    //proveravamo da li stara slika postoji u memoriji i ako postoji brisemo je
                    if (fs.existsSync(path.join(__dirname,'../uploads/avatars/',req.user.avatar)))
                    fs.unlink('./uploads/avatars/'+req.user.avatar,(err)=> {            
                        if(err)
                            return res.status(500).send("Server error!");                       
                    });        
                }
            }
            //izbegavamo ponovo sacuvavanje sifre
            delete newData.password;
            //sacuvavamo nove podatke korisnika
            User.updateOne(newData,(err,user)=>{
                if(err)
                if (err.name === 'MongoError' && err.code === 11000)//mongodb greska
                    return res.status(409).send('User already exist!');
                else return res.status(500).send("Server error!"); 
                return res.status(200).json({user:newData.userName});
            });
        }else//ako se sifre ne slazu
            return res.status(400).send("Wrong password");
    });

});

//korisnikova imovina
router.get('/property',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //trazimo imovinu korisnika
    Property.findUserPropertys(req.user._id.toString(),(err,properties)=>{
        if(err)
            return res.status(500).send("Server error!");
        //vracamo korisniku njegovu imovinu
        return res.status(200).json({obj: properties});
    });
});


////////////////////////////Eksportovanje ruta///////////////////////////////
module.exports=router;