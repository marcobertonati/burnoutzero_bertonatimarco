import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

export default function RetriveFetch({ fetchMovies, error }) {
	return (
		<Container>
			<h1>{error}</h1>
			<Button onClick={fetchMovies}>Retrive fetch!</Button>
		</Container>
	);
}

RetriveFetch.propTypes = {
	fetchMovies: PropTypes.func,
	error: PropTypes.string,
};
