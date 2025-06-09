//1. Agrupar elementos por propiedad 
function Agrupar(arreglo, valor){
    const resultado={}

    for(let i=0; i<arreglo.length; i++){
        const elemento=arreglo[i]
        const clave=elemento[valor]

        if(resultado[clave]===undefined){
            resultado[clave]=[]
        }
        resultado[clave].push(elemento)
    }
    return resultado
}

const datos=[
    {categoria: 'Animales', nombre:'Perro'},
    {categoria: 'Cosas', nombre:'Borrador'},
    {categoria: 'Animales', nombre:'Conejo'},
    {categoria: 'Cosas', nombre:'Pelota'},
    {categoria: 'Animales', nombre: 'Caballo'},
    {categoria: 'Cosas', nombre: 'Zapatos'}
]

console.log(Agrupar(datos,'categoria'))

//2 Promesas encadenadas
function obtenerUsuario(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let nombre
                if(id===1) {
                    nombre='Juan'//Para este ejercicio la ID de Juan es 1
                }
                else if(id===2){
                    nombre='Maria' //ID de Maria=2
                } else{
                    nombre='Usuario no encontrado. Revise de nuevo el ID ingresado'
                }
            resolve({id, nombre})
        },1000)
    })
}

function mostrarUsuarios(PrimerID, SegundoID){
    obtenerUsuario(PrimerID).then(PrimerUsuario=>{
        obtenerUsuario(SegundoID).then(SegundoUsuario=>{
            console.log(`Usuarios cargados:${PrimerUsuario.nombre} y ${SegundoUsuario.nombre}`)
    })
    })
}

mostrarUsuarios(2,1)


//3 Calcular promedio ponderado
function promedioPonderado(notas){
    let suma=0
        for(let i=0; i<notas.length; i++){
            suma=suma+(notas[i].valor*notas[i].peso)
        }
    return suma
}

const notas=[
    {valor: 90, peso:0.5},
    {valor:80, peso:0.3},
    {valor: 70, peso:0.2}
]

console.log(promedioPonderado(notas))

//4 Copiar y modificar objetos

function modificarPersona(persona, nuevo){
    return{
        nombre:nuevo, edad:persona.edad +1
    }
}

const persona={nombre:'Luis', edad:30}
console.log(modificarPersona(persona,'Carlos'))

//5 Eliminar duplicados por propiedad
function Eliminar(arreglo, valor){
    const resultado=[]

    for(let i=0;i<arreglo.length;i++){
        const elemento=arreglo[i]
        let duplicado=false

        for (let x=0; x<resultado.length; x++){
            if(resultado[x][valor]===elemento[valor]){
                duplicado=true
                break
            }
        }

        if(!duplicado){
            resultado.push(elemento)
        }
    }

    return resultado
}

const elementos= [
    {id: 1, nombre: 'A'},
    {id: 2, nombre: 'B'},
    {id: 1, nombre: 'A'}
]

console.log(Eliminar(elementos, 'id'))


//6 Combinar dos listas sin repetir elementos
function Combinar(lista1, lista2){
    const combinacion=[]

    for (let i=0; i<lista1.length; i++){
        combinacion.push(lista1[i])
    }

    for (let x=0; x<lista2.length; x++){
        let duplicado=false

            for(let y=0; y<combinacion.length; y++){
                if (lista2[x]===combinacion[y]){
                    duplicado=true
                    break
                }
            }
        if(!duplicado){
            combinacion.push(lista2[x])
        }
    }

    return combinacion
}

const lista1=['manzana', 'pera', 'banana']
const lista2=['pera','uva','sandia']

console.log(Combinar(lista1,lista2))

//7 Contar cuantas veces aparece cada elemento
function contarPalabras (palabras){
    const resultado={}

    for(let i=0; i<palabras.length; i++){
        const x=palabras[i]

        if(resultado[x]===undefined){
            resultado[x]=1
        } else{
            resultado[x]=resultado[x]+1
        }
    }
    return resultado
}

const listapalabras=['hola', 'adios', 'hola', 'gracias', 'hola', 'gracias']

console.log(contarPalabras(listapalabras))

//8 Filtrar objetos por multiples condiciones 
function Disponible(productos, categoria){
    const resultado=[]

    for (let i=0; i<productos.length; i++){
        const p =productos[i]

        if(productos.categoria === categoria && p.stock){
            resultado.push(p)
        }
    }

    return resultado
}

const productos=[
    {nombre: 'Camisa', categoria: 'ropa', stock:10},
    {nombre: 'Pantalon', categoria: 'ropa', stock: 0},
    {nombre: 'Televisor', categoria: 'electronica', stock: 5}
]

console.log(Disponible(productos), 'ropa')


// 9 Simular carga con promesa y setTimeout
function CargarDatos(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Datos cargados correctamente")
        }, 2000)
    })
}

CargarDatos().then((mensaje)=>{
    console.log(mensaje)
})

//10 Verificar si todos los elementos cumplen una condicion
function verificarEdad(edad){
    for (let i=0; i<edad.length; i++){
        if (edad[i]<18){
            return false
        }
    }
    return true
}

const edad =[19, 25, 35, 17]
console.log(verificarEdad(edad))

