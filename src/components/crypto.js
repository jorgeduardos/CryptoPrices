import React from 'react';
import { Link } from 'react-router-dom';




const CryptoItem = (props) => {

	let imgPath = `../../style/imgs/${CryptoImgPath(props.crypto)}.svg`;

	return(
		<div className='cryptoItem'>
			<Link to='/single-crypto'><img className='cryptoImg' src={imgPath} /></Link>
			<div>{props.crypto.name}</div>
			<div>${props.crypto.price_usd}</div>	
		</div>
	);
}

function CryptoImgPath(cryptoRank){
	return(cryptoRank.rank < 14 ? cryptoRank.id : '../../style/imgs/coins');
}

export default CryptoItem;