import { crearCards, imprimirTemplate, filtrarPorNombre, createSelector, filtrarPorGenero } from "./funciones/funciones.js"
const conteCards = document.getElementById("cartas")

//sprint 2

const generos = movies.map(genero => genero.genres).flat()
const listaGeneros = new Set(generos)
console.log(listaGeneros)

const selec = document.getElementById("elegir")
const textoPeli = document.getElementById("textoGenero")


textoPeli.addEventListener("keyup", () => {
    const filtroTitulo = filtrarPorNombre(movies, textoPeli.value)
    const filtradoPorGenero = filtrarPorGenero( filtroTitulo, selec.value)
    imprimirTemplate(filtradoPorGenero,conteCards,crearCards)
    console.log()
});

selec.addEventListener("input", () =>{
    const filtradoPorGenero = filtrarPorGenero( movies, selec.value) 
    const filtroTitulo = filtrarPorNombre(filtradoPorGenero, textoPeli.value)
    imprimirTemplate(filtroTitulo,conteCards,crearCards)
    //se agrega el otro filtro para poder cruzarlos
})
imprimirTemplate(listaGeneros,selec,createSelector)

console.log(listaGeneros)



