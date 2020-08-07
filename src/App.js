import React from 'react';
import { Provider } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderContainer from './containers/header/header';
import Homepage from './pages/Homepage/Homepage';

import './App.scss';
import './styles.scss'

import configureStore, { history } from './redux/store';

const store = configureStore();

function App() {

	// AOS(Animate on scroll) initialization for the slide animations
	AOS.init();

	return (
		<Provider store={store} history={history} >

			<HeaderContainer />

			<Homepage />
			
			
		</Provider>
	);
}

export default App;
