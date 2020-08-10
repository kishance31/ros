import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderContainer from './containers/header/header';
import Routes from './pages/routes';

import './App.scss';
import './styles.scss'

import configureStore, { history } from './redux/store';

const store = configureStore();

function App() {

	// AOS(Animate on scroll) initialization for the slide animations
	AOS.init();

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
