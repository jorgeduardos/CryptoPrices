import React from 'react';
import { Link } from 'react-router-dom';




const CryptoItem = (props) => {

	let imgPath = `../../style/imgs/icons/svg/color/${CryptoImgPath(props.crypto)}.svg`;

	return(
		<div className='cryptoItem'>
			<Link to={`/single-crypto/${props.crypto.id}`}><img className='cryptoImg' src={imgPath} /></Link>
			<div>
				<span>{props.crypto.rank}.</span><h6>{props.crypto.name}</h6>
			</div>
			<div>${props.crypto.price_usd}</div>	
		</div>
	);
}

function CryptoImgPath(cryptoRank){
	return(cryptoRank.rank < 200 ? cryptoRank.symbol : '../../style/imgs/coins');
}

export default CryptoItem;