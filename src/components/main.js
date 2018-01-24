import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home.js';
import Conversor from './conversor.js';
import SingleCrypto from './singleCrypto.js';


const Main = () => {
	return(
		<div>
			<Switch>
				<Route path='/conversor' component={Conversor} />
				<Route path='/single-crypto/:id' component={SingleCrypto} />
				<Route exact path='/' component={Home}/>
			</Switch>
		</div>
	);
}

export default Main;