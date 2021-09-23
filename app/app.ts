let nombre: string ="ivonne y clelia";
console.log(`nuestros nombres son ${nombre}`);

//array

let lista:string[]=["riohacha","maicao","dibulla"];
for (let index=0;index< lista.length; index++){
    const element =lista[index];
    console.log(element)
}

let lista1:number[]=[1,4,6,7,9]
console.log(lista1);

//tupla
let tuple:[number, string] = [1, "Jaider Quintero"];
    console.log (tuple [1])

    let tuple2:[number, string, string, number] =[
    1, "Jaider", "Quintero", 44
    ]
    tuple2.forEach(element => {
        console.log(element)
    });