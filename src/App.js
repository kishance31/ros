import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './containers/header/header';
import Routes from './routes';


import './App.scss';

import configureStore, { history } from './redux/store';

const store = configureStore();

function App() {
	return (
		<Provider store={store} history={history}>

			<BrowserRouter>

				<HeaderContainer />

				<Routes />

			</BrowserRouter>

		</Provider>
	);
}

export default App;
