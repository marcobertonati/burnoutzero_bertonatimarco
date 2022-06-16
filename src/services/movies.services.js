import axios from 'axios';
const BASE_URL =
	'https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=';

// To the URL:
// https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${page}
// Delete ' ${page} '
// Total Pages 500
// */

function pagesCalled() {
	const arrayPages = [];
	for (let index = 1; index <= 500; index++) {
		arrayPages.push(BASE_URL + index);
	}
	return arrayPages;
}

export async function getMovies() {
	console.log('Get movies!');

	try {
		const endpointsToFetch = pagesCalled();
		
		const arrayOfAxiosPromises = endpointsToFetch.map((endpoint) =>
			axios.get(endpoint),
		);
		const response = await axios.all(arrayOfAxiosPromises);

		const data = response
			.map((movie) => movie.data.results)
			.flat()
			.map((movie, index) => ({
				...movie,
				numberMovie: index + 1,
			}));

		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
}
