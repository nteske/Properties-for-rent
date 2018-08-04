////////////////////////////Postavke properties rute///////////////////////////////

//Ucitavanje modula za rutiranje
const express=require('express');
const router=express.Router();

//provera korisnickih statusa (da li je prijavljen)
const passport=require('passport');

//seme sa podacima
const User=require('../models/user');
const Property=require('../models/property');

//sacuvavanje i obrada fajlova
const multer  = require('multer')
const crypto = require('crypto');
const fs = require('fs');
const path=require('path');

//online cloud za slike
const cloudinary = require('../config/cludinary');


//storage za sacuvavanje slika
var storage = multer.diskStorage({
    //folder za sacuvavanje
    destination: function (req, file, cb) {
      cb(null, './uploads/properties')
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
});

//dodeljivanje prethodno postavljenih podesavanja multeru   
var upload = multer({ storage: storage });

////////////////////////////Rute za setovanje apartmana///////////////////////////////

//ucitavanje svih apartmana za home page
router.get('/all',(req,res,next)=>{
    //pronalazimo sve apartmane
    Property.findAllProperties(req.query,(err,prop)=>{
        if(err)
            return res.status(500).send("Server error!");
        //saljemo sve pronadjenje
        return res.status(200).json({obj:prop});
    });
});

//dodavanje novog apartmana
router.post('/add',upload.array('photo',4),passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //ucitavamo proslednjene podatke
    var itsMe=JSON.parse(req.body.thisProp);
    //kreiramo novi apartman
    let prop=new Property(itsMe);
    //dodeljujemo vlasnistvo korisniko
    prop.user=req.user._id;
    //proveravamo slobodna mesta za slike
    if(req.files[0]!=undefined){prop.image1=req.files[0].filename;
        cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[0].filename,{ use_filename: true, unique_filename: false });}
    if(req.files[1]!=undefined){prop.image2=req.files[1].filename;
        cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[1].filename,{ use_filename: true, unique_filename: false });}
    if(req.files[2]!=undefined){prop.image3=req.files[2].filename;
        cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[2].filename,{ use_filename: true, unique_filename: false });}
    if(req.files[3]!=undefined){prop.image4=req.files[3].filename;
        cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[3].filename,{ use_filename: true, unique_filename: false });}
    //sacuvavamo apartman u bazu
    Property.addPropery(prop,(err)=>{
        if(err)
            return res.status(500).send("Server error!");
        //obavestavamo korisnika da je sacuvavanje uspesno
        return res.status(201).send("Apartment saved!");
    });
});

//pregled jednog apartmana
router.get('/view/:id',(req,res,next)=>{
    //trazimo dati apartman u bazi podataka
    Property.getPropertyById(req.params.id.toString(),(err,prop)=>{
        if(err) 
            return res.status(500).send("Server error!");
        if(!prop)
            return res.status(422).send("Property not found");
        //trazimo vlasnika apartmana
        User.getUserById(prop.user,(err,user)=>{
            if(err) 
                return res.status(500).send("Server error!");
            //ako je vlasnik apartmana pronadjen
            if(user)
                return res.status(200).json ({user:user,prop:prop});
            //ako vlasnik nije pronadjen
            else return res.status(422).send("Owner not found");
        });
    });
});

//slanje postavki apartmana
router.get('/edit/:id',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //trazimo apartman
    Property.getPropertyById(req.params.id.toString(),(err,prop)=>{
        if(err)
            return res.status(500).send("Server error!");
        if(!prop)
            return res.status(422).send("Property not found");
        //moze da dovije podatke za izmenu samo ako je on vlasnik
        if(prop.user.toString()!=req.user._id.toString())
            return res.status(403).send("You dont own the property");
        else return res.status(200).json ({prop:prop});
    });
});

//izmena apartmana s mogucnoscu dodavanja cetiri fotografije
router.patch('/edit/:id',upload.array('photo',4),passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //trazimo apartman
    Property.getPropertyById(req.params.id.toString(),(err,prop)=>{
        if(err)
            return res.status(500).send("Server error!");
        else if(!prop)
            return res.status(422).send("Property not found");
        else{
        //ako je korisnik vlasnik apartmana
        if(prop.user.toString()!=req.user._id.toString())
            return res.status(403).send("You dont own the property");
        else{
        //ucitavamo izmenjen apartman
        var itsMe=JSON.parse(req.body.thisProp);
        //brisemo stare slike
        if(itsMe.image1!=prop.image1&&itsMe.image1=="no")deleteFile(prop.image1);
        if(itsMe.image2!=prop.image2&&itsMe.image2=="no")deleteFile(prop.image2);
        if(itsMe.image3!=prop.image3&&itsMe.image3=="no")deleteFile(prop.image3);
        if(itsMe.image4!=prop.image4&&itsMe.image4=="no")deleteFile(prop.image4);
        //trazimo slobodno mesto da sacuvamo sliku
        for (i = 0; i < 5; i++) { 
            if(req.files[i]!=undefined)
                if(itsMe.image1=="no"){itsMe.image1=req.files[i].filename;
                    cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[i].filename,{ use_filename: true, unique_filename: false });}
                else if (itsMe.image2=="no"){itsMe.image2=req.files[i].filename;
                    cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[i].filename,{ use_filename: true, unique_filename: false });}
                else if (itsMe.image3=="no"){itsMe.image3=req.files[i].filename;
                    cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[i].filename,{ use_filename: true, unique_filename: false });}
                else if (itsMe.image4=="no"){itsMe.image4=req.files[i].filename;
                    cloudinary.v2.uploader.upload("./uploads/properties/"+req.files[i].filename,{ use_filename: true, unique_filename: false });}

        //sacuvavamo nove postavke apartmana
        Property.saveModPropery(req.params.id.toString(),itsMe,(err)=>{
            if(err)
                return res.status(500).send("Server error!");
        });
        //obavestavamo da je apartman sacuvan
        return res.status(200).send("Apartment saved!");
        }
    }
    }
    });
});

//korisnik brise svoj apartman
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //pronalazimo dati apartman
    Property.getPropertyById(req.params.id.toString(),(err,prop)=>{
        if(err)
            return res.status(500).send("Server error!");
        if(!prop)
            return res.status(422).send("Property not found");
        //proveravamo da li je on vlasnik apartmana
        if(prop.user.toString()!=req.user._id.toString())
            return res.status(403).send("You dont own the property");
        //ako jeste brisemo apartman
        prop.remove((err)=>{
            if(err)
                return res.status(500).send("Server error!");
            return res.status(204).send("Property removed!");
        });
    });
});

////////////////////////////Metode///////////////////////////////
//brisanje starih slika
deleteFile=(image)=>{
    if(image!="no")
        //ako se slika nalazi na serveru
        if (fs.existsSync(path.join(__dirname,'../uploads/properties/',image)))
            fs.unlink('./uploads/properties/'+image,(err)=> {            
                if(err) throw err;                    
            });   
    };

////////////////////////////Eksportovanje ruta///////////////////////////////
module.exports=router;