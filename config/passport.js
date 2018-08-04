////////////////////////////Postavke passporta za autentifikaciju///////////////////////////////

//kreiranje strategije i passporta
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

//sema za rad nad podacima
const User=require('../models/user');

//postavke baze podataka
const config=require('../config/database');

////////////////////////////Postavke passporta za rukovanje podacima///////////////////////////////
module.exports=function(passport){
    var opts = {};
    //ekstraktujemo jwt iz bearer tokena
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    //nas tajni kljuc iz postavki baze
    opts.secretOrKey = config.secret;
        //postavljamo passport
        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            //iz datog tokena uzimamo id korisnika i trazimo ga u bazi podataka
            User.getUserById(jwt_payload.data._id, function(err, user) {
                //ako je doslo do greske
                if (err) {
                    return done(err, false);
                }
                //vracamo podatke korisnika ako je pronadjen -> req.user (u radu s rutama)
                if (user) {
                    return done(null, user);
                }//ako nije pronadjen korisnik s tim tokenom, znaci da se nije logovao
                else {
                    return done(null, false);
                }
            });
        }));
}