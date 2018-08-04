////////////////////////////Postavke rating rute///////////////////////////////

//Ucitavanje modula za rutiranje
const express=require('express');
const router=express.Router();

//provera korisnickih statusa (da li je prijavljen)
const passport=require('passport');

//sema sa podacima
const Rating=require('../models/rating');

////////////////////////////Rute za setovanje ratinga///////////////////////////////

//vracanje korisnikove ocene drugog korisnika
router.get('/stared/:user',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //trazimo po idiju jednog i drugog da li postoji dodeljena ocena
    Rating.getStar(req.user._id.toString(),req.params.user.toString(),(err,star)=>{
        if(err)
            return res.status(500).send("Server error!");
        //ako je ocena pronadjena
        if(star) return res.status(200).json({star: star.rate,id:req.user._id});
        //ako nismo uspeli pronaci ocenu
        else return res.status(200).json({star:0,id:req.user._id});
    });
});

//kada korisnik dodeljuje ocenu
router.post('/change',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    //postavljanje ocene
    Rating.setStar(req.user._id.toString(),req.body.id.toString(),req.body.num,(err)=>{
        if(err)
            return res.status(500).send("Server error!");
        //sacuvali smo ocenu
        else return res.status(201).send("saved");
    });
});

////////////////////////////Eksportovanje ruta///////////////////////////////
module.exports=router;