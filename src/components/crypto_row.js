import React from 'react';

const CryptoRow = (props) => {

	// renderCrypto(){
	// 	return(
			
	// 	);
	// }	

	return(
		<div className='row'>
			<div className='col-sm-4'>{props.cryptos.length}</div>
			<div className='col-sm-4'>{props.cryptos.length}</div>
			<div className='col-sm-4'>{props.cryptos.length}</div>
		</div>
	);
}

export default CryptoRow;