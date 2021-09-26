// objetos

// let persona1:{
//     nombre:string,
//     direccion: string,
//     hijos: string[]
// }={
//     nombre:"ivonne castellanos",
//     direccion: "carrera 7a ",
//     hijos:["ivonne", "ximena","castellanos"]
// }
// let persona2:{
//     nombre:string,
//     direccion: string,
//     hijos: string[]
// }={
//     nombre:"ximena castellanos",
//     direccion: "carrera 7 ",
//     hijos:["ivonne", "xime","caste"]
// }

// console.log(persona1);

// objetos personalizados

// type Persona ={
//     nombre:string,
//     direccion: string,
//     hijos: string[]
// }
// let persona1: Persona ={
//     nombre:" IVONNE",
//     direccion: "KM 1",
//     hijos: ["IVO","XIME","CASTE"]
// }
// let persona2: Persona ={
//     nombre:" ANA",
//     direccion: "KM 2",
//     hijos: ["ANA","LUISA","MARTINEZ"]
// }
// console.log(persona1);
// console.log(persona2);



// interface Persona{
//     nombre:string,
//     direccion: string,
//     hijos: string[],
//     mostrarPersona:()=> string
// }

// let perso1: Persona ={
//     nombre:"karol johana",
//     direccion: "cll 18",
//     hijos: ["owen","leandro","rincon"],
//     mostrarPersona(): string{
//         return (`mi nombre es ${this.nombre} - ${this.direccion}` )
//     }
// }

// console.log(perso1.mostrarPersona());

interface Persona4 {
    nombre1:string,
    direccion1?:string,
    hijos1:string[],
    mostrarPerson: () => string
}


let persona1: Persona4 = {
    nombre1: "ivonne castellanos",
    direccion1: "carrera 7a ",
    hijos1: ["ivo","ximena","castellanos"],
    mostrarPerson(): string {
        return (`Nombre y Direccion: ${this.nombre1} - ${this.direccion1} `)
    }
}
console.log(persona1.mostrarPerson());