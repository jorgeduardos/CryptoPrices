import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleCrypto extends Component {
	render(){
		return(
			<div>
				Single Crypto
				<Link to='/'><div>Back</div></Link>
			</div>
		);
	}
}

export default SingleCrypto;