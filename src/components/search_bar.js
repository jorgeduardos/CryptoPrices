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
				<input 
				value={this.state.term}
				onChange={(event) => this.setState({term: event.target.value})} placeholder='Serach Crypto' type="text"/>
			</div>
		);
	}
}