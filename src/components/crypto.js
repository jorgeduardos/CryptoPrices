import React from 'react';
import { Link } from 'react-router-dom';


const images = importAll(require.context('../../style/imgs/cryptocurrency-icons/svg/color', false, /\.(png|jpe?g|svg)$/));

const CryptoItem = (props) => {

	// let imgPath = `../../style/imgs/cryptocurrency-icons/svg/color/${CryptoImgPath(props.crypto)}.svg`;

	return(
		<div className='cryptoItem'>
			<Link to={`/single-crypto/${props.crypto.id}`}><img className='cryptoImg' src={images[`${props.crypto.symbol}.svg`]} /></Link>
			<div>
				<span>{props.crypto.rank}.</span><h6>{props.crypto.name}</h6>
			</div>
			<div>${props.crypto.price_usd}</div>	
		</div>
	);
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


function CryptoImgPath(cryptoRank){
	return(cryptoRank.rank < 200 ? cryptoRank.symbol : '../../style/imgs/coins');
}

export default CryptoItem;