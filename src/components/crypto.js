import React from 'react';
import { Link } from 'react-router-dom';


const CryptoItem = (props) => {
	
	let imgPath = `../../style/imgs/${props.crypto.id}.svg`;

	// changeDisplay(props){
	// 	if(props.crypto.percent_change_24h > 0){
	// 		return 'changeGreen';
	// 	}else{
	// 		return 'changeRed';
	// 	}
	// }

	return(
		<div className='cryptoItem'>
			<Link to='/single-crypto'><img className='cryptoImg' src={imgPath} /></Link>
			<div>{props.crypto.name}</div>
			<div>${props.crypto.price_usd}</div>	
		</div>
	);
}

export default CryptoItem;