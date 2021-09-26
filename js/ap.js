"use strict";
// objetos
var persona1 = {
    nombre1: "ivonne castellanos",
    direccion1: "carrera 7a ",
    hijos1: ["ivo", "ximena", "castellanos"],
    mostrarPerson: function () {
        return ("Nombre y Direccion: " + this.nombre1 + " - " + this.direccion1 + " ");
    }
};
console.log(persona1.mostrarPerson());
