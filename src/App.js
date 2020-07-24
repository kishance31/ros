import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './containers/header/header';
import Homepage from './pages/Homepage/Homepage';


import './App.scss';

const store = configureStore();

function App() {
	return (
		<Provider store={store}>

			<BrowserRouter>

				<HeaderContainer />

				<Homepage />

			</BrowserRouter>

		</Provider>
	);
}

export default App;
