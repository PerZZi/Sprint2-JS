const conteCards = document.getElementById("cartas")

function crearCards(objeto) {
    return `<article class="h-[450px] min-w-[300px] w-1/5 border-2 border-black rounded-lg bg-white flex flex-col gap-5 px-5 pb-5">
    <img class="pt-3 h-[200px]" src="${objeto.image}" alt="">
    <h2 class="text-black text-center">${objeto.title}</h2>
    <p class="text-black text-center line-clamp-3">${objeto.overview}...</p>
    <a class="flex justify-center p-1 rounded-lg bg-violet-800 text-white" href="favs.html?id=${objeto.id}">Detalles</a>
</article>`
}
console.log([crearCards(movies)])

function imprimirTemplate(lista, contenedor, fn) {
    let template = ""
    for (const generoIterado of lista) {
        template += fn(generoIterado)
    }
    contenedor.innerHTML = template
}

 console.log([imprimirTemplate(movies,conteCards,crearCards)])
//sprint 2

const generos = movies.map(genero => genero.genres).flat()
const listaGeneros = new Set(generos)
console.log(listaGeneros)

const selec = document.getElementById("elegir")
const textoPeli = document.getElementById("textoGenero")


textoPeli.addEventListener("keyup", () => {
    const filtroTitulo = filtrarPorNombre(movies, textoPeli.value)
    imprimirTemplate(filtroTitulo,conteCards,crearCards)
    console.log()
});


function filtrarPorNombre(listado, titulos) {
    const filtro = listado.filter(movie => movie.title.toLowerCase().startsWith(titulos.toLowerCase()))
    return filtro
}
console.log(filtrarPorNombre(movies,"the nun"))

function createSelector(generosFiltrados) {
    return `<option value=${generosFiltrados}>${generosFiltrados}</option>`
}

function filtrarPorGenero(listaPeliculas,genero){
    if (genero === "") {
        return listaPeliculas;
    }

    const filtroDeGenero = listaPeliculas.filter(movie => movie.genres.includes(genero));
    return filtroDeGenero;
    
}

selec.addEventListener("input", () =>{
    const opcion = selec.value;
    const filtroGenero = filtrarPorGenero(movies, opcion);
    imprimirTemplate(filtroGenero, conteCards, crearCards);
    
})
imprimirTemplate(listaGeneros,selec,createSelector)

console.log(listaGeneros)


