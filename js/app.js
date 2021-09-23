"use strict";
let nombre = "ivonne y clelia";
console.log(`nuestros nombres son ${nombre}`);
let lista = ["riohacha", "maicao", "dibulla"];
for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element);
}
let lista1 = [1, 4, 6, 7, 9];
console.log(lista1);
let tuple = [1, "Jaider Quintero"];
console.log(tuple[1]);
let tuple2 = [
    1, "Jaider", "Quintero", 44
];
tuple2.forEach(element => {
    console.log(element);
});
