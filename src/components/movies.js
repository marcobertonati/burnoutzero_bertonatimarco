import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

export default function Movies({ movies }) {
	const columns = [
		{ field: 'numberMovie', headerName: 'N°', flex: 0.25 },
		{ field: 'id', headerName: 'ID', flex: 0.25 },
		{ field: 'title', headerName: 'TITLE', flex: 0.5 },
		{
			field: 'overview',
			headerName: 'OVERVIEW',
			flex: 1.75,
		},
		{
			field: 'original_language',
			headerName: 'ORIGINAL LENGUAGE',
			flex: 0.25,
		},
	];

	return (
		<>
			<Container>
				<h2 style={{ textAlign: 'center' }}>MOVIES CATALOGUE</h2>

				<div style={{ height: '70vh', width: '100%' }}>
					<DataGrid
						rows={movies}
						columns={columns}
						pageSize={100}
						rowsPerPageOptions={[100]}
						getRowHeight={() => 'auto'}
					/>
				</div>
			</Container>
		</>
	);
}

Movies.propTypes = {
	movies: PropTypes.array,
};
