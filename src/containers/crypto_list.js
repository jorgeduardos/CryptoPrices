import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCryptos } from '../actions';
import _ from 'lodash';

import CryptoItem from '../components/crypto.js';

class CryptoList extends Component{

	constructor(props){
		super(props);
		this.state = {
			limit: 12
		}
	}


	CryptoItems(){
		return _.map(this.props.cryptos, crypto => {
			if(crypto.rank <= this.state.limit){
				return(
					<CryptoItem key={crypto.id} crypto={crypto} />
				);
			}
		});
	}

	componentDidMount(){
		this.props.fetchCryptos();
	}

	onShowMoreHandler(){
		this.setState({limit: this.state.limit+12});
	}

	onShowLessHandler(){
		this.setState({limit: this.state.limit-12});
	}


	render(){
		return(
			<div className='cryptoInner'>
				{this.CryptoItems()}
				<button onClick={this.onShowMoreHandler.bind(this)} className='loadMore btn btn-secondary'>Load More</button>
				<button onClick={this.onShowLessHandler.bind(this)} className='loadMore btn btn-secondary'>Load Less</button>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		cryptos: state.cryptos
	};
}


export default connect(mapStateToProps, { fetchCryptos })(CryptoList);