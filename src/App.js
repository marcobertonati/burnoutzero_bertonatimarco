/* STYLE */
import './App.css';

/* PROVIDER REDUX */
import { Provider } from 'react-redux';

/* REDUX STORE */
import store from './store/index';

/* PAGES */
import DashboardPage from './pages/dashboard.page';


function App() {
	return (
			<Provider store={store}>
				<DashboardPage />
			</Provider>
	);
}

export default App;
