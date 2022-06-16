import { DataGrid } from '@mui/x-data-grid';
import { columnsTable } from './data-grid/data-grid';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

export default function Movies({ movies }) {
	return (
		<>
			<Container>
				<h2 className='movies-catalogue'>MOVIES CATALOGUE 🍿</h2>

				<div className='table-container'>
					<DataGrid
						rows={movies}
						columns={columnsTable}
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
