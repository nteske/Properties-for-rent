////////////////////////////Postavke image clouda///////////////////////////////
//ucitavamo moduo
const cloudinary = require('cloudinary');

//unosimo licne podatke
cloudinary.config({ 
  cloud_name: 'TODO', //ime clouda
  api_key: 'TODO', //licni kjuc
  api_secret: 'TODO' //licna tajna
});

////////////////////////////Eksportovanje s postavljenim podacima///////////////////////////////
module.exports=cloudinary;