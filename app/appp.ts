class Persona {
    nombre: string;
    direccion: string;
    hijos:string[]

    constructor(
        nombre:string,
        direccion:string,
        hijos:string[]
    ){
        this.nombre = nombre;
        this.direccion = direccion;
        this.hijos = hijos;
    }

    getMostrarPer(): void {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Direccion: ${this.direccion}`)
        console.log(`Hijos: ${this.hijos}`)
    } 
}

let person1 = new Persona("Ivonne", "Cr 7 # cll 10", ["Violeta", "Stiven"])
console.log(person1.getMostrarPer())


class Empleado extends Persona {
    cargo: string;
    salario: string;

    constructor(
        nombre:string,
        direccion:string,
        hijos:string[],
        cargo: string,
        salario: string
    ){
        super(nombre, direccion, hijos)
        this.cargo = cargo;
        this.salario = salario;
    }

    getMostrarEmpleado():void{
        super.getMostrarPer()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Salario: ${this.salario}`) 
    }
}


let empleado1 = new Empleado("Ivonne Ximena", "Cr 7 cll 10", ["Violeta", "Stiven"], "Presidente", "33.330.000")
console.log(empleado1.getMostrarEmpleado())