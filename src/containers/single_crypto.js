import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchSingleCrypto, fetchCryptos } from  '../actions';
import SearchBar from '../components/search_bar.js';
import numeral from 'numeral';

import Conversor from '../components/conversor.js';

const imgPath = '../../style/imgs/cryptocurrency-icons/svg/color';


class SingleCrypto extends Component {

	
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchSingleCrypto(id);
		this.props.fetchCryptos(100);
	}

	onClickHanlder(){
		this.props.deleteSingleCrypto();
		this.props.history.push('/');
	}
	
	render(){
		const crypto = this.props.singleCrypto;
		// const cryptoSymbol = this.props.SingleCrypto.symbol.toLowerCase();
		return(
			<div className="container top-container">
				<SearchBar title={crypto.name} history={this.props.history} />
				<div className='singleCryptoContainer'>
					<div className='col-xs-4'>
						<img 
							src={`${imgPath}/${crypto.symbol ? crypto.symbol.toLowerCase() : crypto.symbol}.svg`} 
							alt={`${crypto.name} logo image`}
						/>
						<div className='rank-div'>
							<div>
								<h3>{crypto.rank}</h3>
							</div>
						</div>
					</div>
					<div className='col-xs-8'>
						<div className='container singleCryptInfoContainer'>
							<div className='row price-row'>
								<div className='col-xs-6 tag'>Price</div>
								<div className='col-xs-6 price-value'>${numeral(crypto.price_usd).format('0,0.0000')}</div>
							</div>
							<div className='row'>
								<div className='col-xs-6 tag'>Market Cap</div>
								<div className='col-xs-6'>${numeral(crypto.market_cap_usd).format('0,0.0')}</div>
							</div>
							<div className='row'>
								<div className='col-xs-6 tag'>Available Supply</div>
								<div className='col-xs-6'>{numeral(crypto.available_supply).format('0,0.0')} {crypto.symbol}</div>
							</div>
							<div className='row'>
								<div className='col-xs-6 tag'>Maximum Supply</div>
								<div className='col-xs-6'>{numeral(crypto.max_supply).format('0,0.0')} {crypto.symbol}</div>
							</div>
							<div className='row'>
								<div className='col-xs-6 tag'>Total Supply</div>
								<div className='col-xs-6'>{numeral(crypto.total_supply).format('0,0.0')} {crypto.symbol}</div>
							</div>
							<div className='row percent-row'>
								<div className='col-xs-6 tag'>Change(24h)</div>
								<div className={`col-xs-6 ${change(crypto.percent_change_24h)}`} >{numeral(crypto.percent_change_24h).format('0.0')}%</div>
							</div>
						</div>
					</div>		
				</div>
				<Conversor cryptos={this.props.cryptos} crypto={this.props.singleCrypto}/>
				<div className='cancel-btn-div'><Link className='cancel-btn btn btn-danger' to=''>Back</Link></div>
			</div>
			// ADD BACK BUTTON
		);
	}
}

function mapStateToProps(state){
	return {
		cryptos: state.cryptos,
		singleCrypto: state.singleCrypto
	};
}


function change(num){
	return num < 0 ? 'change-red' : 'change-green';
}


export default connect(mapStateToProps, {fetchSingleCrypto, fetchCryptos})(SingleCrypto);