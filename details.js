const search = location.search
const params = new URLSearchParams(search)

const id = params.get("id")

const peliculas = movies.find(peli => peli.id == id)
console.log(peliculas)

const contenedorPeli = document.querySelector(".contePeli")


function crearPeli(objeto) {
    let pelicula = `<div class=""><img class="pt-3 h-[300px]" src="${objeto.image}" alt=""> <table class=" h-[100px] w-[400px] border-[2px] bg-white border-black text-center justify-center">
    <tr>
        <td>original lenguage</td>
        <td>${objeto.original_language}</td>
    </tr>
    <tr>
        <td>release data</td>
        <td>${objeto.release_date}</td>
    </tr>
    <tr>
        <td>runtime</td>
        <td>${objeto.runtime}</td>
    </tr>
    <tr>
        <td>status</td>
        <td>${objeto.status}</td>
    </tr>
</table>
</div>
<section class="flex flex-col gap-3 w-[450px]">
<h2 class="text-white">${objeto.title}</h2>
<h3 class="text-white">${objeto.tagline}</h3>
<h4 class="text-white">${objeto.genres}</h4>
<p class="text-white">${objeto.overview}</p>
<table class="h-[100px] w-[400px] bg-white border-[2px] border-black text-center">
    <tr>
        <td>vote average</td>
        <td>${objeto.vote_average}</td>
    </tr>
    <tr>
        <td>budget</td>
        <td>${objeto.budget}</td>
    </tr>
    <tr>
        <td>revenue</td>
        <td>${objeto.revenue}</td>
    </tr>
</table>`
    return pelicula
}
contenedorPeli.innerHTML = crearPeli(peliculas)