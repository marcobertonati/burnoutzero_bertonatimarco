/* Modules */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import getMoviesRedux from '../store/movies/action';
import PropTypes from 'prop-types';

/* Components */
import Movies from '../components/movies';
import RandomMovie from '../components/randomMovie';
import RetriveFetch from '../components/retriveFetch';
import LoadingSping from '../components/loading.spin';

/* Services */
import { getMovies } from '../services/movies.services';
import intentionalError from '../error/intentionalError';

const mapStateToProps = (state) => {
	return {
		movies: state.getMoviesReducer.movies,
	};
};

function MoviesContainer({ getMoviesRedux, movies }) {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (intentionalError()) {
			fetchMovies();
		} else {
			console.log('An error ocurred!');
			setLoading(false);
			setError('No fetching data!');
		}
	}, []);

	
	const fetchMovies = () => {
		getMovies()
			.then((data) => {
				setLoading(false);
				getMoviesRedux(data);
			})
			.catch((err) => {
				console.log(err);
				setLoading(true);
				setError('Error fetching data!');
			});
	};

	const randomMovie = () => {
		return movies[Math.floor(Math.random()*1000 + 1)]
	}

	/* RENDERS */

	// Loading
	if (loading) {
		return <LoadingSping />;
	}

	// Data fetched
	if (movies) {
		return (
			<>
				<Movies movies={movies} />
				<RandomMovie randomMovie={randomMovie()} />
			</>
		);
	}

	// Intentional error
	return <RetriveFetch error={error} fetchMovies={fetchMovies} />;
}

/* Validate proptypes */
MoviesContainer.propTypes = {
	getMoviesRedux: PropTypes.func,
	movies: PropTypes.array,
};

export default connect(mapStateToProps, { getMoviesRedux })(MoviesContainer);
