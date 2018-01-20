import React, { Component } from 'react';


export default class SearchBar extends Component {
	
	constructor(props){
		super(props);

		this.state = { term: '' };
	}

	render(){
		return(
			<div className='titleDiv'>
				<h1>Coin Watch</h1>
				<button className='conversor'>Conversor</button>
				<input 
				value={this.state.term}
				onChange={(event) => this.setState({term: event.target.value})} placeholder='Search Crypto' type="text"/>
			</div>
		);
	}
}