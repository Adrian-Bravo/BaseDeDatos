"use strict";
let mostrarNombre = function (nom) {
    console.log(`Mi nombre es ${nom}`);
};
mostrarNombre("Geraldine Suárez");
console.log(mostrarNombre);
let SaludarTotal = function () {
    console.log('saludos....');
};
console.log(SaludarTotal);
let sumar = (x, y) => {
    let s = 0;
    if (y === undefined) {
        s = x;
    }
    else {
        s = x + y;
    }
    return s;
};
let sum = sumar(7, 8);
console.log(sum);
function calcularEdad() {
    return 45;
}
let mostrarPersona = function (nom, edad = calcularEdad()) {
    console.info(`Nombre: ${nom} - Edad: ${edad}`);
    if (edad == 45) {
        console.warn("La edad no fue enviada");
    }
};
mostrarPersona("Jaider Polo");
let duplicador = function (x) {
    return x * 2;
};
let triplicador = function (x) {
    return x * 3;
};
function sumNum(f, y) {
    return f(y) + 50;
}
console.log(sumNum(duplicador, 10));
console.log(sumNum(triplicador, 40));
