import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

export default function RandomMovie({ randomMovie }) {
	return (
		<Container>
			<h3>This is your random movie: {randomMovie.title}</h3>
		</Container>
	);
}

/* Validate proptypes */
RandomMovie.propTypes = {
	randomMovie: PropTypes.object,
};
