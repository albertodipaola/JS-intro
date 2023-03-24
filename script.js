// ES1
// calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4. Potete usare Math

function calcIpotenusa(cat1, cat2) {
    return Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
}
console.log('ES 1: '+calcIpotenusa(3, 4));

//ES2
// scrivere una funzione che trasformi un nome nelle sue iniziali "Tizio Caio" => T.C.

function initials(nome) {
    let result = nome[0]+'.';

    for (let i = 0; i < nome.length; i++) {
        if(nome[i] === ' '){
            result += nome[i+1]+'.';
        }
    }
    return result;
}
console.log('ES 2: '+initials("Tizio Caio"));

// ES3
// scrivere una funzione che , dati 3 numeri, ritorni true se questi 3 numeri possono formare un triangolo. False altrimenti

function trianglePossible(a, b, c) {
    if (a < b+c && a > b-c && b < c + a && b > c - a && c < a + b && c > a - b) {
        return true;
    }
    return false;
}
console.log('ES 3: '+trianglePossible(2,2,3));

//ES4
//congettura di Collatz: preso un numero maggiore di 1, se questo è pari dividerlo per due, se dispari moltiplicarlo per 3 e aggiungere 1. Ripetere. Qualunque sia il numero di partenza, l'algoritmo termina sempre ad uno. Scrivere una funzione che implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni iterazione

function collatz(num) {
    let arr = [num];
    while (num !== 1) {
        if (num%2 === 0) {
            num = num/2;
        }
        else{
            num = (num*3)+1;
        }
        arr.push(num)
    }
    return arr;
}
console.log('ES 4: '+collatz(7));

// ES5
// Scrivere una funzione che, assegnato un numero n,  ritorni la successione di fibonacci fino al numero n sottoforma di array (Ad esempio 3 => [1,1,2], 9 => [1,1,2,3,5,8,13,21,34]).

function fibonacci(nVolte) {
    let fibo = [0, 1];
    for (let i = 2; i <= nVolte; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}
console.log('ES 5: '+fibonacci(9));

//ES6
//scrivere una funzione che, assegnato un numero n, ritorni se è primo

function isOdd(num) {
    if (num === 2 || num === 3 || num === 5 || num === 7 || num === 11) {
      return true;
    }
    else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0) {
      return false;
    }
    else{
      return true;
    }
}
console.log("ES 6: " + isOdd(27));

//ES7
//scrivere una funzione che assegnata una stringa ritorni la somma delle cifre in essa presenti. Ad esempio "Sono 1 stringa di 6 parole" => 7

function sumString(stringa) {
    let sum=0;
    for (let i = 0; i < stringa.length; i++) {
        if (!isNaN(stringa[i]) && stringa[i]!=' ') {
            sum += parseInt(stringa[i]);
        }
    }
    return sum;
}
console.log("ES 7: " + sumString("Sono 1 stringa di 6 parole"));

//ES8
//scrivere una funzione che trasformi un numero in ore e minuti. Ad esempio 3014 => 50:14. Devono essere sempre presenti due cifre, sia per le ore che per i minuti
function numInHour(num) {
    let hh = Math.floor(num/60);
    let mm = num - hh*60;

    if (mm<10) {
        return hh+':0'+mm;
    }
    else{
        return hh + ":" + mm;
    }
}
console.log("ES 8: " + numInHour(3014));

//ES9
//scrivere una funzione che, assegnata una stringa, ritorni l numero di vocali presenti. gestire le maiuscole

function nVocali(stringa) {
    let strLow = stringa.toLowerCase();
    let count = 0;
    for (let i = 0; i < strLow.length; i++) {
        if (strLow[i].toLowerCase() === "a" || strLow[i].toLowerCase() === "e" || strLow[i].toLowerCase() === "i" || strLow[i].toLowerCase() === "o" || strLow[i].toLowerCase() === "u") {
            count ++;
        }
    }
    return count;
}
console.log("ES 9: " + nVocali('AbcdEfghi lmnA swe'));

//ES10
//scrivere una funzione che accetta una stringa e restituisce la parola più lunga
function parolaPiuLunga(stringa) {
    let parola='';
    let parolaMax='';
    for (const char of stringa) {
        if (char !== ' ') {
            parola += char;
        }
        else{
            if (parola.length > parolaMax.length) {
                parolaMax = parola;
                parola = '';
            }
        }
    }
    return parolaMax;
}
console.log("ES 10: " + parolaPiuLunga("lorens ndnd doddd odsvodhoshdfds sdhds cxsd"));

//ES11
//scrivere una funzione che accetti una stringa contenente solo caratteri x e y e ritorni true se il numero delle x è uguale al numero delle y
function es11(stringa) {
    let nX=0;
    let nY=0;
    for (const char of stringa) {
        if (char==='x' || char==='y') {
            if (char === "x") {
              nX++;
            } 
            else {
                nY++;
            }
        }
        else{
            return false;
        }
    }
    if (nX === nY) {
        return true;
    }
    else{
        return false;
    }
}
console.log("ES 11: " + es11("xyxyxyxyxy"));
