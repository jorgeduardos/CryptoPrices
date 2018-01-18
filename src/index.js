import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './components/search_bar.js';
import CryptoRow from './components/crypto_row.js';



const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';


class App extends Component {
	
	constructor(props){

		super(props);
		this.state = {cryptos: []};

		axios.get(url).then(response => {
			
			// const data = _.zipObject(_.map(response.data, 'id'), _.map(response.data, 'price_usd'));
			// console.log(response);

			this.setState({cryptos: response.data});  //converts array to object and maps to id key
			console.log(this.state.cryptos);
		}).catch((error)=>{
			console.log(error);
		});
	}

	render(){
		return(
			<div>
				<SearchBar />
				<div className='container cryptoContainer'>
					<CryptoRow cryptos={this.state.cryptos} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));