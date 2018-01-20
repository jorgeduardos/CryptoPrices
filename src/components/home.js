import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './components/search_bar.js';
import CryptoRow from './components/crypto_row.js';


let limitGlobal = 500;
let limitString = `?limit=${limitGlobal}`;
let url = `https://api.coinmarketcap.com/v1/ticker/${limitString}`;


class App extends Component {
	
	constructor(props){

		super(props);
		this.state = {
			cryptos: [],
			limit: 12
		};

		axios.get(url).then(response => {
			// const data = _.zipObject(_.map(response.data, 'id'), _.map(response.data, 'price_usd'));
			// console.log(response);
			this.setState({cryptos: response.data});  //converts array to object and maps to id key
			console.log(this.state.cryptos);
		}).catch((error)=>{
			console.log(error);
		});
	}

	onShowMoreHandler(){
		this.setState({limit: this.state.limit+12});
	}

	onShowLessHandler(){
		this.setState({limit: this.state.limit-12});
	}

	render(){
		return(
			<div className='app'>
				<SearchBar />
				<div className='container cryptoContainer'>
					<CryptoRow limit={this.state.limit} cryptos={this.state.cryptos} />
				</div>
				<button onClick={this.onShowMoreHandler.bind(this)} className='loadMore btn btn-secondary'>Load More</button>
				<button onClick={this.onShowLessHandler.bind(this)} className='loadMore btn btn-secondary'>Load Less</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));