//creo una sequenza di numeri da 1 a 100
for (var i=1; i<=100; i++) {
    var numero_corrente = i;
    //creo una regola che mi permetta di ottenere il resto divideno per i numeri indicati
    var resto_multiplo_tre = numero_corrente % 3;
    var resto_multiplo_cinque = numero_corrente % 5;
    //creo la condizione e stampo in pagina quella vera
    if ((resto_multiplo_tre == 0) && (resto_multiplo_cinque == 0)) {
    console.log(numero_corrente + " BuzzFizz");
    } else if (resto_multiplo_cinque == 0) {
        console.log(numero_corrente + " Buzz");
    } else if (resto_multiplo_tre == 0) {
        console.log(numero_corrente + " Buzz");
    } else {
        console.log(numero_corrente);
    }
}
