let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if(bodovi>= 90 && bodovi<=100){
    ocjena=5;
    poruka="Cestitamo prosli ste sa ";
    console.log(poruka+ocjena);
}
else if(bodovi>= 75 && bodovi<=89){
    ocjena=4;
    poruka="Cestitamo prosli ste sa ";
    console.log(poruka+ocjena);
}
else if(bodovi>= 60 && bodovi<=74){
    ocjena=3;
    poruka="Cestitamo prosli ste sa ";
    console.log(poruka+ocjena);
}
else if(bodovi>= 50 && bodovi<=59){
    ocjena=2;
    poruka="Cestitamo prosli ste sa ";
    console.log(poruka+ocjena);
}
else if(bodovi>= 0 && bodovi<=49){
    ocjena=1;
    poruka="Nazalost, niste polozili kolegij. Ocjena: ";
    console.log(poruka+ocjena);
}