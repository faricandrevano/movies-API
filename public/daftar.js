const API_KEY = 'api_key=33388fc15effe37e9660ee9309e70be0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=33388fc15effe37e9660ee9309e70be0&query=`
const search = document.getElementById('search');

const form = document.getElementById('form');
const bodyTab = document.getElementById('bodyTab');
getMovies(API_URL)
async function getMovies(url) {
	const response = await fetch(url)
	const data = await response.json();
	table(data.results)
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

function table(movies) {
	bodyTab.innerHTML = ''
	movies.forEach(function(movie) {
		const {
			title,
			poster_path,
			id,
			release_date,
			popularity,
			vote_average,
			original_language,
			vote_count

		} = movie;
		let card = document.createElement("tr");
		card.classList.add('trTab');
		card.innerHTML = `
										<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${id}</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											${title}
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											${release_date}
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											${original_language}
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											${popularity}
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											${vote_count}
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											${vote_average}
										</td
									`;
		bodyTab.appendChild(card);
	})
}