import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCrypto } from '../actions';


class SearchBar extends Component {
	
	constructor(props){
		super(props);
		this.state = { term: '' };
	}
	
	onKeyPressHandler(event){
		if(event.key == 'Enter'){
			this.props.fetchSingleCrypto(this.state.term.toLowerCase());
			this.props.history.push(`/single-crypto/${this.state.term.toLowerCase()}`);
		}
	}

	render(){
		return(
			<div className='titleDiv'>
				<h1>{this.props.title}</h1>
				<input 
					className='title-form form-control'
					value={this.state.term}
					onKeyPress={this.onKeyPressHandler.bind(this)}
					onChange={(event) => this.setState({term: event.target.value})} placeholder='Search Crypto' type="text"
				/>
				<div className={cryptoInexistance(this.props.error)}>Crypto Does Not Exist</div>
			</div>
		);
	}
}

function cryptoInexistance(object){
	return object.display ? 'error-show' : 'error-hide';
}

function mapStateToProps(state){
	return{
		error: state.error
	};
}

export default connect(mapStateToProps, { fetchSingleCrypto })(SearchBar);