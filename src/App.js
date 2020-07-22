import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './containers/header/header';
import DefaultLayoutContainer from './containers/defaultLayout/defaultLayout'
import FooterContainer from './containers/footer/footer';

import './App.scss';

import configureStore, { history } from './redux/store';

const store = configureStore();

function App() {
	return (
		<Provider store={store} history={history} >

			<HeaderContainer />

			<DefaultLayoutContainer />

			<FooterContainer />
		</Provider>
	);
}

export default App;
