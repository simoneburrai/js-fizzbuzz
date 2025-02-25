# FIZZBUZZ


## Info 

Nell'esercizio di oggi, salvato come progetto n.19, bisogna realizzare un programma con Javascript, che permetta di stampare i numeri da 1 a 100.
Ci sono comunque delle eccezioni:
 - per tutti i numeri che sono multipli di 3 al posto del numero bisogna stampare **"Fizz"**;
 - per tutti i numeri che sono multipli di 5 al posto del numero bisogna stampare **"Buzz"**;
 - per tutti i numeri che sono sia multipli di 3 che multipli di 5, al posto del numero bisogna stampare **"FizzBuzz"**.

 *Qui di seguito viene riportato l'algoritmo in forma scritta, dove viene analizzato tutto il procedimento.*


## Algoritmo

### Ciclo For

    1.  Apro un ciclo for inserendo come l'indice uguale a 1 (perchè dobbiamo stampare i numeri da 1 a 100);
    2. mettiamo come condizione: indice minore o uguale a 100 (ossia finchè l'indice è minore u uguale a 100 continuare a eseguire le operazioni all'interno del for);
    3. mettiamo l'operatore di incremento uguale a i++ (ad ogni iterazione all'interno del for il nostro contatore aumenterà di 1 fino ad arrivare al limite imposto dalla condizione 2);
    4.

### Dichiarazione Variabili

*N.B. Il modulo è un operazione che permette di calcolare il resto dato da una divisione fra due numeri. Se il resto equivale a 0, allora il divisore è un multiplo del dividendo.*

    1. Creo tre variabili (booleane):
        variabile1 - contiene un valore booleano che corrisponde alla comparazione di identità fra il modulo 3 di i (indice) e 0.
        Questo permetto di selezionare tutti i numeri che sono multipli di 3.

        variabile2 - contiene un valore booleano che corrisponde alla comparazione di identità fra il modulo 5 di i (indice) e 0.
        Questo permetto di selezionare tutti i numeri che sono multipli di 5.

        variabile3 - contiene un valore booleano che corrisponde alla comparazione fra variabile1 e variabile2 unite dall'operatore AND(&&).
         Questo permetto di selezionare tutti i numeri che sono sia multipli di 3 che multipli di 5.

## Condizione 

    - Creiamo un if partendo dal controllo più specifico, ossia il controllo della variabile 3.
    Se la variabile 3 è vera allora stampa "FuzzBizz";
    Altrimenti Se la variabile 1 è vera allora stampa "Fizz";
    Altrimenti Se la variabile 2 è vera allora stampa "Buzz";
    Altrimenti stampa direttadimente (i), che in questo caso corrisponderà a qualsiasi numero da 1 a 100 che non sia un multiplo di, o che non sia un multiplo di 5.