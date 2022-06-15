const getMoviesRedux = (movies) => {
	// Debemos recibir un array de películas
	return {
		type: 'GET_MOVIES',
		payload: movies,
	};
};

export default getMoviesRedux;
