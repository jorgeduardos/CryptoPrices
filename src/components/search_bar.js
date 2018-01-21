import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SearchBar extends Component {
	
	constructor(props){
		super(props);

		this.state = { term: '' };
	}

	render(){
		return(
			<div className='titleDiv'>
				<h1>Coin Watch</h1>
				<Link to='/conversor'><button className='conversor'>Conversor</button></Link>
				<input 
				className='title-form form-control'
				value={this.state.term}
				onChange={(event) => this.setState({term: event.target.value})} placeholder='Search Crypto' type="text"/>
			</div>
		);
	}
}