import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Conversor extends Component {
	render(){
		return(
			<div>
				Conversor
				<Link to='/'>Back</Link>
			</div>
		);
	}
}

export default Conversor;