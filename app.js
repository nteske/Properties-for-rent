////////////////////////////Glavna putanja servera///////////////////////////////

//ucitavanje modula za rutiranje, autetifikaciju i rukovanje bazom
const express= require('express');
const passport=require('passport');
const mongoose=require('mongoose');
//moduo za rukovanje putanjama prema fajlovima
const path=require('path');
//parsovanje zahteva u json
const bodyParser=require('body-parser');
//moduo za postavke aplikacije
const cors=require('cors');
//postavke baze podataka
const config=require('./config/database');
//moduo za logovanje svega sto se desava
var logger = require('morgan');


//putanje prema fajlovima za rutiranje
const users=require('./routes/users');
const upload=require('./routes/upload');
const properties=require('./routes/properties');
const rating=require('./routes/rating');
const admin=require('./routes/admin');

//povezivanje sa bazom podataka
mongoose.connect(config.database,{ useNewUrlParser: true });
//ako je povezivanje uspelo
mongoose.connection.on('connected',()=>{
    console.log('Connected to detabase: '+config.database);
});
//ako je doslo do greske
mongoose.connection.on('error',(err)=>{
    console.log('Error with connection to db: '+err);
});
//kreiranje aplikacije koja koristi express
const app=express();
//data aplikacija koristi cors
app.use(cors());

//govorimo serveru da prikazuje angular aplikaciju ng build
app.set('views', __dirname + '/public');
app.set('view engine', 'html');

//staticki direktorijum bice ./public
app.use(express.static(path.join(__dirname,'public')));
//loger ce logovati u developer modu
app.use(logger('dev'));
//i bodyparser ce raditi s json objektima
app.use(bodyParser.json());

//inicijalizujemo passport
app.use(passport.initialize());

//i postavlamo njegova podesavanja
app.use(passport.session());
require('./config/passport')(passport);


//na rute aplikacije dodajemo fajlove za rutiranje
app.use('/user',users);
app.use('/admins',admin);
app.use('/uploads',upload);
app.use('/propertie',properties);
app.use('/ratings',rating);

//sve rute sajta ce pokazivati na angular aplikaciju
app.get('**',(req,res)=>{
    res.sendfile(__dirname+'/public/index.html');
  });

//port za startovanje servera
const port= process.env.PORT || 8080;
//startujemo server
app.listen(port,()=>{
    console.log("server started on port: "+port);
});