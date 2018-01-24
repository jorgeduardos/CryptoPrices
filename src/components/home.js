import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './search_bar.js';
import CryptoList from '../containers/crypto_list.js';



const Home = (props) =>{
	return(
		<div className='app'>
			<SearchBar title={'Coin Watch'} history={props.history} />
			<div className='container cryptoContainer'>
				<CryptoList/>
			</div>
		</div>
	);
}

export default Home;