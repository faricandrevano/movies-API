const API_KEY = 'api_key=33388fc15effe37e9660ee9309e70be0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=33388fc15effe37e9660ee9309e70be0&query=`
const search = document.getElementById('search');
const form = document.getElementById('form');
const place = document.getElementById('containerMovies');

const detail = document.getElementById('detilMovie');


getMovies(API_URL)
async function getMovies(url) {
	const response = await fetch(url)
	const data = await response.json();
	cardMovie(data.results)
	console.log(data.results);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let searchV = search.value;
	if (searchV && searchV !== '') {
		getMovies(SEARCH_API + searchV);
		searchV = ''
	} else {
		window.location.reload();
	}
})


function cardMovie(movies) {
	place.innerHTML = ""
	movies.forEach(function(movie) {
		const {
			title,
			poster_path
		} = movie;
		let card = document.createElement("div");
		card.classList.add('cardMovie');
		card.innerHTML = `
                      <img src="${IMG_URL+poster_path}">
                      <div class="container container-cards border-3">
                          <h2 class="text-xl mt-3">${title}</h2>
                          <div class="py-2 bg-red-600 rounded-full text-center my-4">
                              <a href="detail.html">View details</a>
                          </div>
                      </div>`;
		place.appendChild(card);
	})
}
// export.module = {}
// cardMovie()

// function showMovie(data) {
// 	const div = document.getElementById('containerMovies');
// 	data.forEach(el => {
// 		div.innerHTML = `<div class="w-[275px] h-fit shadow-xl border border-black/40">
//                      <img src="${IMG_URL+el.poster_path}">
//                      <div class="container container-cards border-3">
//                          <h2 class="text-xl mt-3">Avengers 2016</h2>
//                          <div class="py-2 bg-red-600 rounded-full text-center my-4">
//                              View details
//                          </div>
//                      </div>
//                 </div>`
// 	})
// }
// showMovie(API_URL)

// function showMovies(data) {
// 	data.forEach(movies => {
// 		const {
// 			title,
// 			poster_path,
// 			vote_average,
// 			overview
// 		} = movies;
// 		const movies1 = document.getElementById('containerMovies');
// 		movies1.innerHTML = `<div class="w-[275px] h-fit shadow-xl border border-black/40">
//                     <img src="${IMG_URL+poster_path}">
//                     <div class="container container-cards border-3">
//                         <h2 class="text-xl mt-3">Avengers 2016</h2>
//                         <div class="py-2 bg-red-600 rounded-full text-center my-4">
//                             View details
//                         </div>
//                     </div>
//                 </div>`
// 	})
// }

// showMovies()