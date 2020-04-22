//creo una sequenza di numeri da 1 a 100
for ( var i = 1; i <= 100; i++) {
    //devo individuare i valori che sono multipli di 3
    var resto_multiplo_tre = i % 3;
    //devo individuare i valori che sono multipli di 5
    var resto_multiplo_cinque = i % 5;
    //creo la condizione per stampare in pagina
    if ((resto_multiplo_tre == 0) && (resto_multiplo_cinque == 0)) {
        //affianco "fizzbuzz" ai multipli di tre e cinque
        console.log(i + " " + "FizzBuzz");
    } else if (resto_multiplo_tre == 0) {
        //affianco "fizz" ai multipli di tre
        console.log(i + " " + "Fizz");
    } else if (resto_multiplo_cinque == 0) {
        //affianco "buzz" ai multipli di cinque
        console.log(i + " " + "Buzz");
    } else {
        //stampo i valori che non rientrano nelle condizioni precedenti
        console.log(i);
    }
}
