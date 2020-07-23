import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './containers/header/header';
import Homepage from './pages/Homepage/Homepage';


import './App.scss';

import configureStore, { history } from './redux/store';

const store = configureStore();

function App() {
	return (
		<Provider store={store} history={history} >

			<HeaderContainer />

			<Homepage />
			
			
		</Provider>
	);
}

export default App;
