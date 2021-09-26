// let nombre: string ="ivonne y clelia";
// console.log(`nuestros nombres son ${nombre}`);

// //array

// let lista:string[]=["riohacha","maicao","dibulla"];
// for (let index=0;index< lista.length; index++){
//     const element =lista[index];
//     console.log(element)
// }

// let lista1:number[]=[1,4,6,7,9]
// console.log(lista1);

// //tupla
// let tuple:[number, string] = [1, "Jaider Quintero"];
//     console.log (tuple [1])

//     let tuple2:[number, string, string, number] =[
//     1, "Jaider", "Quintero", 44
//     ]
//     tuple2.forEach(element => {
//         console.log(element)
//     });


let mostrarNombre = function(nom:string){
    console.log(`mi nombre es ${nom}`);
}
mostrarNombre("pepito perez");
console.log(mostrarNombre);

//funciones anonimas

let saludarTotal = function(){
    console.log(`saludos...`)
}
console.log (saludarTotal);
saludarTotal()

let sumar= function(x: number, y:number):number {
    return(x+y);
}

let sum:number =sumar(7,8);
console.log(sum);


// otro ejemplo
function calcularEdad(){
    return 45;
}
 let mostrarPersona =function (nom: string ,edad:number =calcularEdad()){
     console.info(`nombre: ${nom} - edad:${edad}`)
     if (edad ==45 ){
         console.warn("la edad no fue encontrada")
     }
 }

 mostrarPersona("jaider quintero",48);

 // funciones que contienen otras funciones 

 let duplicador =function(x:number):number{
     return x*2
 }

 let triplicador =function(x:number):number{
    return x*3
} 
function sumNum (f:(x:number) => number, y:number){
    return f(y) +50
}
console.log(sumNum(duplicador,10))
console.log(sumNum(triplicador,40))