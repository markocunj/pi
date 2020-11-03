
let lista = [ 
    {
    ime: "Marko",
    prezime: "Marković",
    upisan: true
    },
    {
    ime: "Iva",
    prezime: "Ivić",
    upisan: true
    },
    {
    ime: "Lucija",
    prezime: "Lucić",
    upisan: true
    },
    {
    ime: "Nikola",
    prezime: "Nikolić",
    upisan: false
    },
    {
    ime: "Davor",
    prezime: "Pejdo",
    upisan: false
    },
    {
    ime: "Ivano",
    prezime: "Pejdos",
    upisan: true
    },
    {
    ime: "Fran",
    prezime: "Cunj",
    upisan: true
    },
    {
    ime: "Matea",
    prezime: "Pjanić",
    upisan: false
    },
    {
    ime: "Leo",
    prezime: "Messi",
    upisan: true
    },
    {
    ime: "Ansu",
    prezime: "Fati",
    upisan: false
    }
   ];

function provjeri(lista, pojam){
    for (let i=0; i<10; i++){
        if((lista[i].ime || lista[i].prezime)==pojam){
            if(Boolean(lista[i].upisan)){
                return true;
            }
        }
    }
}

console.log(provjeri(lista, "Fran"));
