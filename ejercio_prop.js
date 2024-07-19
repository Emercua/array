// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna funciÃ³n matemÃ¡tica
// Crea el cÃ³digo necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con nÃºmeros

// 1) Mostrar por consola la suma de todos los valores

function sumarArray(arrayNumeros) {
    let  suma=0

    for (let i = 0; i < arrayNumeros.length; i++) {
        suma=suma+arrayNumeros[i]
        console.log(arrayNumeros[i])
    
    }
    return suma
}


console.log("La suma de todos los valores es: " + sumarArray(arrayNumeros1) )
console.log("La suma de todos los valores es: " + sumarArray(arrayNumeros2) )



// 2) Mostrar por consola el promedio

function promedioArray(arrayNumeros) {
    let promedio=0
    numero=arrayNumeros.length
    promedio=sumarArray(arrayNumeros)/numero
    return promedio

}


console.log("El promedio de todos los valores es: " + promedioArray(arrayNumeros1) )
console.log("El promedio de todos los valores es: " + promedioArray(arrayNumeros2) )


// 3) Encontrar los valores mÃ¡ximo y mÃ­nimo

// Maximo

function maximoArray(arrayNumeros) {
    maximo=arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++) {

        if(arrayNumeros[i]>maximo) {
            maximo=arrayNumeros[i]
        }
            
    }

    return maximo

}

console.log("El maximo de todos los valores es: " + maximoArray(arrayNumeros1) )
console.log("El maximo de todos los valores es: " + maximoArray(arrayNumeros2) )

// Minimo

function minimoArray(arrayNumeros) {
    minimo=arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++) {

        if(arrayNumeros[i]<minimo) {
            minimo=arrayNumeros[i]
        }
            
    }

    return minimo

}


console.log("El minimo de todos los valores es: " + minimoArray(arrayNumeros1) )
console.log("El minimo de todos los valores es: " + minimoArray(arrayNumeros2) )

// 4) Sumar los valores con Ã­ndice par y restar los impares

function sumarParRestarImpar(arrayNumeros) {
    let sumaPar = 0
    let sumaImpar = 0
    
    arrayNumeros.forEach((numero, index) => {
    
        if(index % 2 === 0) {
            sumaPar += numero
        } else {
            sumaImpar += numero
        }
    
       })
       resultado=sumaPar-sumaImpar
       return resultado

}
console.log("La suma valores indice par y resta impares es. " + sumarParRestarImpar(arrayNumeros1) )
console.log("La suma valores indice par y resta impares es: " + sumarParRestarImpar(arrayNumeros2) )



// Hay que mostrar por consola cada resultado

// Dado estos arrays:
let arrayNombres1 = ["Fede", "Anna", "Pepe", "Carles", "Nico", "Ricardo",  "Sara", "Pol", "Daniel"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Crea una funciÃ³n para encontrar el elemento con el texto mÃ¡s largo de los dos arrays (no de cada array)
// y guardarlo en la variable varTextoMasLargo
// Si hay mÃ¡s de un valor, guardarlos en el array arrayTextosMasLargos.


let TextoMasLargo=maximodedosArrays(arrayNombres1, arrayNombres2)
console.log(TextoMasLargo)

console.log(TextoMasLargo.length)
let arrayTextosMasLargos=[]
let varTextoMasLargo=[]

if(TextoMasLargo.length >=2) {
    arrayTextosMasLargos=TextoMasLargo
} else{
    varTextoMasLargo=TextoMasLargo
}

console.log(arrayTextosMasLargos)
console.log(varTextoMasLargo)



function maximodedosArrays(arrayNombres1, arrayNombres2) {

comparamax=""
contador1=[]
arrayNombres1.forEach((cadaarray, index) => {

    console.log(index)
    contador1[index]=cadaarray.length
console.log(contador1)

})
console.log(contador1)


contador2=[]
arrayNombres2.forEach((cadaarray, index) => {

    console.log(index)
    contador2[index]=cadaarray.length
console.log(contador2)

})
console.log(contador2)
//asdasdasd==============================

// let prueba=[4,6,6,4,6,1]
// console.log(prueba)
// Combinar array1 y array2
contador_total=[]
// let combinado = contador1.concat(contador2);

// Añadir el array combinado al final de arrayFinal
contador_total.push(...contador1,...contador2);


console.log(contador_total)



let array_posicion=maximoArray_2(contador_total)

console.log(array_posicion)

let strings_result=[]


array_posicion.forEach((cadaarray, index) => {

    console.log(cadaarray)

    let posicion=0
    if(cadaarray>contador1.length) {

        posicion=cadaarray-contador1.length

        console.log(posicion)

        strings_result[index] = arrayNombres2[posicion]
        console.log(strings_result)

    } else {

        posicion=cadaarray

        console.log(posicion)

        strings_result[index] = arrayNombres1[posicion]
        console.log(strings_result)

    }


})

let varTextoMasLargo=strings_result 

return strings_result



// let strings_result =


console.log(varTextoMasLargo)




function maximoArray_2(arrayNumeros) {
    
   let maximo=[]
   let index=[]
   index[0]=0
   maximo[0]=arrayNumeros[0]
    numaxi=0
    
    for (let i = 1; i < arrayNumeros.length; i++) {
       
        if(arrayNumeros[i]===maximo[numaxi]) {
            console.log(i)

            console.log(arrayNumeros[i])
            console.log(numaxi)
            numaxi++
            console.log(numaxi)
            maximo[numaxi]=arrayNumeros[i]
            index[numaxi]=i
            console.log(index)

        } else if(arrayNumeros[i]>maximo[numaxi]) {
            maximo=[]
            numaxi=0
            index=[]
            maximo[0]=arrayNumeros[i]
            index[0]=i

        }
        console.log(index)
            
    }
console.log(maximo)
console.log(numaxi)
console.log(index)
    return index

}

}



// 6) Lo mismo para el texto mÃ¡s corto.



let TextoMascorto=minimodedosArrays(arrayNombres1, arrayNombres2)
console.log(TextoMascorto)

console.log(TextoMascorto.length)
let arrayTextosMascortos=[]
let varTextoMascorto=[]

if(TextoMascorto.length >=2) {
    arrayTextosMascortos=TextoMascorto
} else{
    varTextoMascorto=TextoMascorto
}

console.log(arrayTextosMascortos)
console.log(varTextoMascorto)



function minimodedosArrays(arrayNombres1, arrayNombres2) {

comparamax=""
contador1=[]
arrayNombres1.forEach((cadaarray, index) => {

    console.log(index)
    contador1[index]=cadaarray.length
console.log(contador1)

})
console.log(contador1)


contador2=[]
arrayNombres2.forEach((cadaarray, index) => {

    console.log(index)
    contador2[index]=cadaarray.length
console.log(contador2)

})
console.log(contador2)
//asdasdasd==============================

// let prueba=[4,6,6,4,6,1]
// console.log(prueba)
// Combinar array1 y array2
contador_total=[]
// let combinado = contador1.concat(contador2);

// Añadir el array combinado al final de arrayFinal
contador_total.push(...contador1,...contador2);


console.log(contador_total)



let array_posicion=minimoArray_2(contador_total)

console.log(array_posicion)

let strings_result=[]


array_posicion.forEach((cadaarray, index) => {

    console.log(cadaarray)

    let posicion=0
    if(cadaarray>contador1.length) {

        posicion=cadaarray-contador1.length

        console.log(posicion)

        strings_result[index] = arrayNombres2[posicion]
        console.log(strings_result)

    } else {

        posicion=cadaarray

        console.log(posicion)

        strings_result[index] = arrayNombres1[posicion]
        console.log(strings_result)

    }


})

let varTextoMasLargo=strings_result 

return strings_result



// let strings_result =


console.log(varTextoMasLargo)




function minimoArray_2(arrayNumeros) {
    
   let maximo=[]
   let index=[]
   index[0]=0
   maximo[0]=arrayNumeros[0]
    numaxi=0
    
    for (let i = 1; i < arrayNumeros.length; i++) {
       
        if(arrayNumeros[i]===maximo[numaxi]) {
            console.log(i)

            console.log(arrayNumeros[i])
            console.log(numaxi)
            numaxi++
            console.log(numaxi)
            maximo[numaxi]=arrayNumeros[i]
            index[numaxi]=i
            console.log(index)

        } else if(arrayNumeros[i]<maximo[numaxi]) {
            maximo=[]
            numaxi=0
            index=[]
            maximo[0]=arrayNumeros[i]
            index[0]=i

        }
        console.log(index)
            
    }
console.log(maximo)
console.log(numaxi)
console.log(index)
    return index

}

}







// 7) ObtÃ©n un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.

let longitudNombres=obtenerLongitudNombres(arrayNombres1)

console.log(longitudNombres)

function obtenerLongitudNombres(arrayNombres1) {

contador1=[]
arrayNombres1.forEach((cadaarray, index) => {

    console.log(index)
    contador1[index]=cadaarray.length
console.log(contador1)

})
console.log(contador1)

return contador1

}





// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i






// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea asÃ­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]


// 10) A partir de un array como el que has obtenido en el ejercicio 9,
// debes resolver los ejercios 1, 2, 3 y 4