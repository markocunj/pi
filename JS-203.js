function ploca(velicina) {

    for (let i = 0; i < velicina; i++) {
        let pocetak = i % 2 === 1 ? ' ' : '#';

        let pom = ''; 

        for (let j = 0; j < velicina; j++) {
            pocetak = pocetak == '#' ? ' ' : '#'; 
            pom += pocetak;
        }

        console.log(pom);
    }
}
    
ploca(15, 15);


