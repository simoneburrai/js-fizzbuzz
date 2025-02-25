//Apertura ciclo for
for(i=1; i<=100; i++){
    // Creazione Variabili Booleane per i moduli 
    let divisibleForThree = (i%3) === 0;
    let divisibleForFive = (i%5) === 0;
    let divisibleForThreeAndFive = divisibleForThree && divisibleForFive;

    // Creazione IF per il controllo delle variabili booleane e a seconda della situazione
    // esegui un operazione di stampa specifica
    if(divisibleForThreeAndFive){
        console.log("Fizzbuzz");
    }else if(divisibleForThree){
        console.log("Fizz");
    } else if (divisibleForFive){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}