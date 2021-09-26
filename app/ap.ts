const aparatowally =[ 
    {codigo:"1235456", descripcion : " nevera voladora",tipoElectro:"hogar"}
]



function agregaraparato():void{
    let codi =""+prompt("Digite el codigo del producto a agregar: ")
    let descrip = ""+prompt("Digite la descripcion del producto a agregar: ")
    let tip =""+ prompt("Digite el tipo del producto a agregar: ")

    aparatowally.push({ codigo:codi, descripcion:descrip, tipoElectro:tip})
}

function mostrar(): void{
    for( let i=0; i<aparatowally.length; i++){
        console.log(`Aparato ${aparatowally [i].descripcion }   tipo: ${aparatowally [i].tipoElectro } su codigo es: ${aparatowally [i].codigo }`)
    }
}

function buscar (buscare:string): number{
    for( let i=0; i<aparatowally.length; i++){
        if (buscare== aparatowally[i].codigo ){
            console.log ("encontrado el aparato con el codigo: "+i)
            return i
            
        }
    }
    return -2
}

function eliminar ():void{
    let elimi = ""+ prompt(" codigo del aparato a eliminar: ")
    for( let i=0; i<aparatowally.length; i++){
        if (elimi == aparatowally[i].codigo ){
            aparatowally.splice(buscar(elimi ),1)
        }
    }
}