"use strict";
let mostrarNombre = function (nom) {
    console.log(`mi nombre es ${nom}`);
};
mostrarNombre("pepito perez");
console.log(mostrarNombre);
let saludarTotal = function () {
    console.log(`saludos...`);
};
console.log(saludarTotal);
saludarTotal();
let sumar = function (x, y) {
    return (x + y);
};
let sum = sumar(7, 8);
console.log(sum);
function calcularEdad() {
    return 45;
}
let mostrarPersona = function (nom, edad = calcularEdad()) {
    console.info(`nombre: ${nom} - edad:${edad}`);
    if (edad == 45) {
        console.warn("la edad no fue encontrada");
    }
};
mostrarPersona("jaider quintero", 48);
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
let potencia2 = function (x) {
    return Math.pow(x, 2);
};
let potencia3 = function (x) {
    return Math.pow(x, 3);
};
function resNum(f, y) {
    return f(y) - 2;
}
console.log(resNum(potencia2, 4));
console.log(resNum(potencia3, 3));
