//Funciones basicas ==> Con parámetros

// function mostrarNombre(nom:string){
//     console.log(`Mi nombre es ${nom}`);
// }

let mostrarNombre = function (nom:string){
    console.log(`Mi nombre es ${nom}`);
}

mostrarNombre("Geraldine Suárez");
    console.log(mostrarNombre);

    //FUNCIONES ANÓNIMAS

let SaludarTotal = function(){
    console.log('saludos....');
}

console.log(SaludarTotal);

//void retorna ----  number retorna números
// let sumar = function(x: number, y: number): number{
// return(x+y);
// }

// Esta función es la misma de arriba pero mas resumida
let sumar = (x:number, y?:number):number =>{

    let s:number = 0;

    if (y=== undefined){
        s=x
    }
    else {
        s= x+y
    }
    return s
}

let sum:number = sumar(7,8);
console.log(sum);


//Ejemplo

function calcularEdad(){
    return 45;
}
let mostrarPersona =function(nom: string, edad:number = calcularEdad()){
    console.info(`Nombre: ${nom} - Edad: ${edad}`)

    if(edad==45){
        console.warn("La edad no fue enviada");
        
    }

}

mostrarPersona("Jaider Polo");

//funciones que contienen parámetros de otras funciones

let duplicador = function (x:number):number{
    return x*2
}

let triplicador = function (x:number):number{
    return x*3
}
// f recibe el nombre de la función ej: duplicador y envia el 10 como parámetro allí
// aquí se llama una función f:(x:number)=>number
// aquí se recibe el otro parámetro  y:number
function sumNum (f:(x:number)=>number, y:number){
    return f(y)+50
}

console.log(sumNum(duplicador,10));
console.log(sumNum(triplicador,40));
