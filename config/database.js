////////////////////////////Postavke baze podataka///////////////////////////////

module.exports={
    database:'mongodb://localhost:27017/Apartments',//url adresa baze
    secret:'mojatajna'  //tajni kod koji passport koristi za kreiranje tokena
    //obavezno mora sadrzati imena casopisa kao sto su: moja tajna, moja sudbina... 
}