import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

export default function RetriveFetch({ fetchMovies, error }) {
	return (
		<Container>
			<div className='retrive-fetch'>
				<h3>{error} 😭</h3>
				<Button onClick={fetchMovies}>Click to retrive fetch!</Button>
			</div>
		</Container>
	);
}

RetriveFetch.propTypes = {
	fetchMovies: PropTypes.func,
	error: PropTypes.string,
};
