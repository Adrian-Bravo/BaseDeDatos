"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, direccion, hijos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.hijos = hijos;
    }
    Persona.prototype.getMostrarPer = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Direccion: " + this.direccion);
        console.log("Hijos: " + this.hijos);
    };
    return Persona;
}());
var person1 = new Persona("Ivonne", "Cr 7 # cll 10", ["Violeta", "Stiven"]);
console.log(person1.getMostrarPer());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, direccion, hijos, cargo, salario) {
        var _this = _super.call(this, nombre, direccion, hijos) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.getMostrarEmpleado = function () {
        _super.prototype.getMostrarPer.call(this);
        console.log("Cargo: " + this.cargo);
        console.log("Salario: " + this.salario);
    };
    return Empleado;
}(Persona));
var empleado1 = new Empleado("Ivonne Ximena", "Cr 7 cll 10", ["Violeta", "Stiven"], "Presidente", "33.330.000");
console.log(empleado1.getMostrarEmpleado());
