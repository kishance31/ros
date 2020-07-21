import React from 'react';
import { Provider } from 'react-redux';
import NavbarContainer from './containers/navbar/navbar'

import './App.scss';

import configureStore, {history} from './redux/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store} history={history} >
      <div className="App">
        <NavbarContainer />
      </div>
    </Provider>
  );
}

export default App;
