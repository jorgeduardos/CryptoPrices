import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchSingleCrypto } from  '../actions';
import SearchBar from './search_bar.js';
import numeral from 'numeral';

const imgPath = '../../style/imgs/cryptocurrency-icons/svg/color';

class SingleCrypto extends Component {

	
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchSingleCrypto(id);
	}

	onClickHanlder(){
		this.props.deleteSingleCrypto();
		this.props.history.push('/');
	}
	
	render(){
		const crypto = this.props.singleCrypto;
		return(
			<div className="container top-container">
				{console.log(crypto)}
				<SearchBar title={crypto.name} history={this.props.history} />
				<div className='singleCryptoContainer'>
					<div className='col-sm-4'>
						<img 
							src={`${imgPath}/${crypto.symbol}.svg`} 
							alt={`${crypto.name} logo image`}
						/>
						<div className='rank-div'>
							<div>
								<h3>{crypto.rank}</h3>
							</div>
						</div>
					</div>
					<div className='col-sm-8'>
						<div className='container singleCryptInfoContainer'>
							<div className='row price-row'>
								<div className='col-sm-6 tag'>Price</div>
								<div className='col-sm-6 price-value'>${numeral(crypto.price_usd).format('0,0.0000')}</div>
							</div>
							<div className='row'>
								<div className='col-sm-6 tag'>Market Cap</div>
								<div className='col-sm-6'>${numeral(crypto.market_cap_usd).format('0,0.0')}</div>
							</div>
							<div className='row'>
								<div className='col-sm-6 tag'>Available Supply</div>
								<div className='col-sm-6'>{numeral(crypto.available_supply).format('0,0.0')} {crypto.symbol}</div>
							</div>
							<div className='row'>
								<div className='col-sm-6 tag'>Maximum Supply</div>
								<div className='col-sm-6'>{numeral(crypto.max_supply).format('0,0.0')} {crypto.symbol}</div>
							</div>
							<div className='row'>
								<div className='col-sm-6 tag'>Total Supply</div>
								<div className='col-sm-6'>{numeral(crypto.total_supply).format('0,0.0')} {crypto.symbol}</div>
							</div>
							<div className='row percent-row'>
								<div className='col-sm-6 tag'>Change(24h)</div>
								<div className={`col-sm-6 ${change(crypto.percent_change_24h)}`} >{numeral(crypto.percent_change_24h).format('0.0')}%</div>
							</div>
						</div>
					</div>		
				</div>
				<Link className='btn btn-primary cancel-btn' to='/'>Back</Link>
			</div>
			// ADD BACK BUTTON
		);
	}
}

function mapStateToProps(state){
	return {
		singleCrypto: state.singleCrypto
	};
}


function change(num){
	return num < 0 ? 'change-red' : 'change-green';
}


export default connect(mapStateToProps, {fetchSingleCrypto})(SingleCrypto);