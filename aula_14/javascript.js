var issoeumastring = "Isso e uma string";
let issoeumnumero = 42;
const issoeumbolleano = true;
let issoTambemEUmaString = "42";

if (issoeumastring === issoTambemEUmaString) {
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}

console.log(issoeumnumero + issoTambemEUmaString);
console.log(issoeumnumero + issoeumnumero);

var global = "Eu sou uma variável global";

{
    let local = "Eu sou uma variável local";
    console.log(global);
    console.log(local);
}

console.log (global);
//console.log (local); isso causará um erro, pois está definida fora do bloco

for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

for(let i = 0; i < 5; i++){
    console.log(i);
    console.log(i*2);
    console.log(i*2+1);
}

//imprimindo os impares com while
let j = 0;
while(j < 5){
    console.log(j*2+1);
    j++;
}

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.cos(90));

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
console.log(sum.toPrecision(2));

// Gerando os numeros primos entr 1 e 100
function isPrime(num) {
    if(num <= 1) return false;
    for( let i = 2; 1 <= Math.sqrt(num); i++){
        if (num % 1 === 0) return false;
    }
    return true
}

for (let i = 1; i <= 100; i++){
    isPrime ? console.log(i) : null
}


let x = 10
if (x > 5) {
    console.log("X is greater than 5");
} else if (x < 5) {
    consele.log("X is less than 5");
} else {
    console.log("X is equal to 5")
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

for (let i = 0; i < 10; i += 2) {
    console.log(i);
};

var y = 0;
while (y < 10) {
    console.log(y);
    y++;
};

y = 1;
while (y < 10) {
    (y % 2 !== 0) ? console.log(y) : null;
    y++;
}

