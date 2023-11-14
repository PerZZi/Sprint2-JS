const conteCards=document.getElementById("cartas")

function crearCards(objeto){
    let card= `<article class="h-[450px] min-w-[300px] w-1/5 border-2 border-black rounded-lg bg-white flex flex-col gap-5 px-5 pb-5">
    <img class="pt-3 h-[200px]" src="${objeto.image}" alt="">
    <h2 class="text-black text-center">${objeto.title}</h2>
    <p class="text-black text-center">${objeto.overview.slice(0,150)}...</p>
    <a class="flex justify-center p-1 rounded-lg bg-violet-800 text-white" href="favs.html?id=${objeto.id}">Detalles</a>
</article>`
    return card
}
console.log(crearCards(movies[0]))

for (let indice = 0; indice < movies.length; indice++) {
    conteCards.innerHTML = conteCards.innerHTML + crearCards(movies[indice])

}


//sprint 2

// const generos = movies.map(genero => genero.genres)
// console.log(...generos)

const genres = new Set()
for (const movie of movies) {
    genres.add(...movie.genres)
}
console.log(genres)


const selec = document.getElementById("elegir")
const textoPeli = document.getElementById("textoGenero")


textoPeli.addEventListener("input", () => {
    const inputText = textoPeli.value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
       
        return movie.genres.some(genre => genre.toLowerCase().includes(inputText));
    });
    selec.innerHTML = '';
    filteredMovies.forEach(movie => {
        const option = document.createElement('option');
        option.text = movie.title;
        selec.add(option);
    });
});

function filtrarPorNombre(movies, nombre) {
    const filtrarNombre = movies.filter(movie => movie.title.toLowerCase().startsWith(nombre.toLowerCase()))
    return filtrarNombre
}


