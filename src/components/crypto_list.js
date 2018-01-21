import React from 'react';

import CryptoItem from './crypto.js';

const CryptoList = (props) => {

	const CryptoItems = props.cryptos.slice(0, props.limit).map((crypto) => {
		return(
			<CryptoItem key={crypto.id} crypto={crypto} />
		);
	});

	return(
		<div className='cryptoInner'>
			{CryptoItems}
		</div>
	);
}

export default CryptoList;