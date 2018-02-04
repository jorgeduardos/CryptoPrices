import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import Main from './components/main.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render((
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Main/>
		</BrowserRouter>
	</Provider>
), document.querySelector('.container'));