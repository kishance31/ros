import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import SplashScreenProvider from './context/splashScreenContext';
import AppWrapper from './AppWrapper';
import OverlayProvider from './context/loadingOverlay.context';
import InvoicePDF from './components/portal/InvoicePDF'

import 'aos/dist/aos.css';

import './Homepage.scss';
import './App.scss';

import configureStore from './redux/store';

const store = configureStore();
const persistor = persistStore(store);

function App() {

	// AOS(Animate on scroll initialization for the slide animations
	AOS.init();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<SplashScreenProvider>
						<OverlayProvider>
							<AppWrapper />
							{/* <InvoicePDF /> */}
						</OverlayProvider>
					</SplashScreenProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
