var array = [];
var guessed = [];
var num = [];
var guess = 0;
var v = 0;
var vr = 0;

alert('Gioco di memoria di cinque valori numerici, hai 30 secondi per memorizzarli.');

for (i = 0; i < 5; i++) {

    do {
        array[i] = Math.floor(Math.random() * 100) + 1;
        v = 0;

        for (ii = 0; ii < i; ii++) {

            if (array[i] == array[ii]) {
                v = 1;
            }

        }

    } while (v == 1);

}

console.log(array);
document.getElementById('numbers').innerHTML = array;

setTimeout(() => {
    document.getElementById('numbers').innerHTML = 'Tempo Scaduto! Inserisci i valori numerici corretti.';
}, 30000);


setTimeout(() => {
    for (i = 0; i < 5; i++) {

        do {
            num[i] = prompt() * 1;
            vr = 0;

            if (isNaN(num[i])) {
                alert('Non hai inserito un valore numerico');
                vr = 1;
            } else {

                for (j = 0; j < i; j++) {
    
                    if(num[i] == num[j]) {
                        alert("Hai gia' inserito questo valore numerico!");
                        vr = 1;
                    }
        
                }
    
            }
        
        } while (vr == 1);
    
    
        for (ii = 0; ii < 5; ii++) {
    
            if (num[i] == array[ii]) {
                guessed.push(num[i]);
                guess++;
            }
    
        }
    }
    
    if (guessed.length == 0) {
        document.getElementById('numbers').innerHTML = 'Non hai indovinato alcun valore numerico! Punti: ' + guess + '.';
    } else if (guessed.length == 1) {
        document.getElementById('numbers').innerHTML = 'Hai indovinato il valore numerico ' + guessed + '. Punti: ' + guess + '.';
    } else if (guessed.length == 5) {
        document.getElementById('numbers').innerHTML = 'Hai indovinato tutti i valori numerici: ' + guessed + '. Punti: ' + guess + '.';
    } else {
        document.getElementById('numbers').innerHTML = 'Hai indovinato i valori numerici: ' + guessed + '. Punti: ' + guess + '.';
    }

    console.log(guessed);
    console.log(guess);
    
}, 32000);
