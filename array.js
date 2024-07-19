// Formas de crear un array

let arrayVacio_1 = [];
let arrayVacio_2=new Array();

console.log(arrayVacio_1.length)

let arrayConDatos_01=["peras","manzanas","uvas"]
let arrayConDatos_02= new Array("peras","manzanas","uvas")



// los array estan indexadas por su Posicio 
// emepzando del cero 

// ["peras","manzanas","uvas"]
//      0      1         2  



// mostrar un elemento del array 

console.log(arrayConDatos_01[0]);
console.log(arrayConDatos_02[0])

// mostrar un elemento del array 

arrayConDatos_01[0]= "Emerson";
console.log(arrayConDatos_01);

// añadir un elemento por posicion directamen 

arrayConDatos_01[2]= "Emerson";
console.log(arrayConDatos_01);

// podemos añaadir mas alla de los elementos existentes 
// pero los intermedio seran undefined
arrayConDatos_01[8]= "Melocotones";
console.log(arrayConDatos_01);
console.log(arrayConDatos_01.length)

// para añadir elementos al final 

let arrarFrutas= ["peras","manzanas","uvas"]

// push añande un elemento o varios al final 
arrarFrutas.push("melocotones")
console.log(arrarFrutas)

arrarFrutas.push("sandias","mangos")
console.log(arrarFrutas)

// unshift añande un elemento o varios al inicio

arrarFrutas.unshift("melocotones")
console.log(arrarFrutas)

arrarFrutas.unshift("sandias","mangos")
console.log(arrarFrutas)

// pop elinia desde el final 

    arrarFrutas.pop()
console.log(arrarFrutas)
let ultimoElemento=arrarFrutas.pop()
console.log(ultimoElemento)
console.log(arrarFrutas)

// shift elemina desde el inicio
arrarFrutas.shift()
    console.log(arrarFrutas)
    let primerElemento=arrarFrutas.shift()
    console.log(primerElemento)
    console.log(arrarFrutas)


    // Length para averiguar el elemento 

    console.log(arrarFrutas.length)

    // Splice: añadir un elemento en una posicion determinada
    console.log(arrarFrutas)
    arrarFrutas.splice(3,2,"melocotones")
    console.log(arrarFrutas)

    // slice: eliminar un elemento en una posicion determinada extrae una oaerte del array      
   let newArray= arrarFrutas.slice(1,2)
   console.log(arrarFrutas)
    console.log(newArray)

    // extraer toos los lementos del arrayar 


    for(let i=0; i<arrarFrutas.length; i++) { 
        console.log(arrarFrutas[i])
    }

    arrarFrutas.forEach(fruta=>console.log(fruta))

    let arrayMayusculas=[]

    arrarFrutas.forEach((fruta)=>{

        arrayMayusculas.push(fruta.toUpperCase())
        console.log(fruta)
      })

    let arrayJoint=arrayMayusculas.join(" -=s ")
    console.log(arrayJoint)

    // split a partir de exto cea un array

    let texto="hola que tal soy Emerson hoy"
    let arrayPalabras= texto.split(" ")
    console.log(arrayPalabras)

let fechaEspana="18-07-2024"
let arrayfecha=fechaEspana.split("-")
console.log(arrayfecha)

let fechaIntenacional=arrayfecha.reverse().join("/")
console.log(fechaIntenacional)
console.log(typeof fechaIntenacional)

let fechaIncorrecta="2024-07/18"
fechaIncorrecta=fechaIncorrecta.replace("/", "-")
console.log(fechaIncorrecta)




let respuesta=10>=20 ? "es mayor" : "es menor"

console.log(respuesta)