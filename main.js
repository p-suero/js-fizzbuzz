//creo una sequenza di numeri da 1 a 100
for ( var i = 1; i <= 100; i++) {
    //devo individuare i valori che sono multipli di 3
    var resto_multiplo_tre = i % 3;
    //devo individuare i valori che sono multipli di 5
    var resto_multiplo_cinque = i % 5;
    //creo la condizione per stampare in pagina
    if ((resto_multiplo_tre == 0) && (resto_multiplo_cinque == 0)) {
        //sostituisco "fizzbuzz" ai multipli di tre e cinque
        console.log("FizzBuzz");
    } else if (resto_multiplo_tre == 0) {
        //sostituisco "fizz" ai multipli di tre
        console.log("Fizz");
    } else if (resto_multiplo_cinque == 0) {
        //sostituisco "buzz" ai multipli di cinque
        console.log("Buzz");
    } else {
        //stampo i valori che non rientrano nelle condizioni precedenti
        console.log(i);
    }
}
