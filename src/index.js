import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main.js';


ReactDOM.render((
	<BrowserRouter>
		<Main/>
	</BrowserRouter>
), document.querySelector('.container'));