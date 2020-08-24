import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Homepage.scss';
import './App.scss';

import configureStore, { history } from './redux/store';

const store = configureStore();
const persistor = persistStore(store);

function App() {

	// AOS(Animate on scroll initialization for the slide animations
	AOS.init();

	return (
		<Provider store={store} history={history}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<AppWrapper />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
