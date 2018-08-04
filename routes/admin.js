////////////////////////////Postavke admin rute///////////////////////////////

//Ucitavanje modula za rutiranje
const express=require('express');
const router=express.Router();

//provera korisnickih statusa (da li je prijavljen)
const passport=require('passport');

//seme sa podacima
const User=require('../models/user');
const Property=require('../models/property');

////////////////////////////Rute za admin podesavanja///////////////////////////////

//ucitavanje liste apartmana
router.get('/properties',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin<1)//minimum admin nivoa 1
        return res.status(403).send("You are not an admin!");
    //trazimo sve apartmane {} -bez ikakvog uslova pretrage
    Property.findAllProperties({},(err,properties)=>{
        if(err)
            return res.status(500).send("Server error!");
        //vracmao listu svih apartmana
        return res.status(200).json({obj: properties});
    });
});

//ucitavanje liste korisnika
router.get('/users',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin<1)//minimum admin nivoa 1
        return res.status(403).send("You are not an admin!");
    //traizmo sve korisnike
    User.findAllUsers((err,users)=>{
        if(err)
            return res.status(500).send("Server error!");
        //vracamo listu korisnika
        return res.status(200).json({obj: users,status:req.user.admin});
    });
});

//brisanje imovine (apartmana)
router.post('/delete',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin<1)//minimum admin nivoa 1
        return res.status(403).send("You are not an admin!");
    //uzimamo poslati apartman od strane front-enda
    var prop=new Property(req.body);
    //brisemo apartman iz baze podataka
    prop.remove((err)=>{
        if(err)
            return res.status(500).send("Server error!");
    });
    //obrisali smo apartman
    return res.status(204).send("Property removed!");
});

//postavljanje i uklanjanje bana
router.patch('/ban',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin<1)//minimum admin nivoa 1
        return res.status(403).send("You are not admin!");
    //sacuvavamo novo stanje korisnika o banu
    User.updateOne(req.body,(err)=>{
        if(err)
            return res.status(500).send("Server error!");
    });
    //ukoliko je to stanje banovan
    if(req.body.banned==true)
    //obrisacemo mu i sve apartmane
    Property.findUserPropertys(req.body._id,(err,prop)=>{
        if(err)
            return res.status(500).send("Server error!");
        //prolazimo kroz niz apartmana i brisemo ih
        for(var i=0;i<prop.length;i++)
            prop[i].remove((err)=>{
                if(err)
                    return res.status(500).send("Server error!");
            });
        //obavestavamo da je sve zavrseno uspesno
        return res.status(200).send("User is banned!");
    });
    //ukoliko mu je ban skinut
    else return res.status(200).send("User ban status is changed!");
});

//ruta dodele i oduzimanja admina (samo za admine nivoa 2)
router.patch('/admin',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin<2)//minimum admin nivoa 2
        return res.status(403).send("You are not head admin!");
    //sacuvavamo nove postavke admina
    User.updateOne(req.body,(err)=>{
        if(err)
            return res.status(500).send("Server error!");
        //obavestavamo da su promene uspesne
        return res.status(200).send("Admin status changed!");
    });
});

////////////////////////////Eksportovanje ruta///////////////////////////////
module.exports=router;