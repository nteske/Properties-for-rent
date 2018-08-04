////////////////////////////Postavke uploads rute///////////////////////////////

//Ucitavanje modula za rutiranje
const express=require('express');
const router=express.Router();

//prikazivanje fajlova
const path=require('path');
const fs = require('fs');
var http = require('http');


const cloudinary = require('../config/cludinary');

////////////////////////////Rute za prikaz fajlova///////////////////////////////

//bezbedne rute za prikaz (ukoliko je front-end uputio neobradjen zahtev)

router.get('/avatars',(req,res)=>{
    //saljemo default sliku avatara
    res.status(400).sendFile(path.resolve(path.join(__dirname,'../uploads/avatar.png')));
});

router.get('/properties',(req,res)=>{
    //saljemo default sliku apartmana
    res.status(400).sendFile(path.resolve(path.join(__dirname,'../uploads/property.png')));
});


//pronalazanje i pikaz korisnickog avatara
router.get('/avatars/:image',(req,res)=>{
    //ukoliko korisnik jos uvek nije postavio svoj avatar odgovaramo s defaultnim
    if(req.params.image=='no') 
        res.status(200).sendFile(path.resolve(path.join(__dirname,'../uploads/avatar.png')));
    //ukoliko ima sliku gledamo da li se ona nalazi na serveru
    else if (fs.existsSync(path.join(__dirname,'../uploads/avatars/',req.params.image))) {
        //ako fajl postoji prikazujemo ga
        res.status(200).sendFile(path.resolve(path.join(__dirname,'../uploads/avatars/',req.params.image)));
    }else //ako nismo pronasli korisnicku sliku radimo backup
        {
            //trazimo backup slike
            var url=goForBackup(path.join(__dirname,'../uploads/avatars/'),req.params.image);
            //ako je uspeo odgovoricemo s url te slike da ubrzamo ucitavanje
            if(url!=null)return res.redirect(url);
            //ako nije uspeo vracamo default url
            else return res.status(200).sendFile(path.resolve(path.join(__dirname,'../uploads/avatar.png')));
        }
});


//pronalazanje i pikaz slika apartmana
router.get('/properties/:image',(req,res)=>{
    //ukoliko apartman nema sliku odgovaramo s defaultnim
    if(req.params.image=='no') 
        res.status(200).sendFile(path.resolve(path.join(__dirname,'../uploads/property.png')));
    //ukoliko ima sliku gledamo da li se ona nalazi na serveru
    else if (fs.existsSync(path.join(__dirname,'../uploads/properties/',req.params.image))) {
        //ako fajl postoji prikazujemo ga
        res.status(200).sendFile(path.resolve(path.join(__dirname,'../uploads/properties/',req.params.image)));
    }else //ako nismo pronasli sliku apartmana radimo backup
        {
            //trazimo backup slike
            var url=goForBackup(path.join(__dirname,'../uploads/properties/'),req.params.image);
            //ako je uspeo odgovoricemo s url te slike da ubrzamo ucitavanje
            if(url!=null)return res.redirect(url);
             //ako nije uspeo vracamo default url
            else return res.status(200).sendFile(path.resolve(path.join(__dirname,'../uploads/property.png')));
        }
});

////////////////////////////Metode upload rute///////////////////////////////

//vracmao slike s clouda ako su obrisane na heroku
goForBackup=function(location,name)
{
    //uzimamo img tag od clauda
    var re = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
    //i izdvajamo samo link
    var results = re.exec(cloudinary.image(name));
    var img=results[1];
    //ukljanjamo visak karaktera s uzetog linka
    var url=img.replace(/['\s]+|['\s]+/g,"").toString();
    //kreiramo strim za preuzimanje fajla
    var file = fs.createWriteStream(location+name);
    //saljemo zahtev ka cloudu
    http.get(url, function(response) {
        //ako je uspesno prosao preuzimamo sliku
        if(response.statusCode==200)response.pipe(file);
        //ako nije govorimo to serveru
        else url=null;
    });
    return url;
}

////////////////////////////Eksportovanje ruta///////////////////////////////
module.exports=router;