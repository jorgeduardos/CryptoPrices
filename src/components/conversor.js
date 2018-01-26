import React, {Component} from 'react';

class Conversor extends Component {
	constructor(props){
		super(props);

		this.state = {
			dropClass1: '',
			dropClass2: '',
			selectedCrypto: this.props.crypto.name,
			cryptoToConvert: ''
		}
	}

	toggleShowClass(event) {
		// console.log(event.target.className == 'dropbtn dropbtn1');
		if(event.target.className == 'dropbtn dropbtn1'){
			var css = (this.state.dropClass1 === '') ? "show" : '';
	    	this.setState({ dropClass1: css});
		}else{
			var css = (this.state.dropClass2 === '') ? "show" : '';
	    	this.setState({ dropClass2: css});
		}
	}

	handleOnClickA(event){
		// console.log(event.target.textContent);
		this.setState({selectedCrypto: event.target.textContent});
	}

	renderDropCryptos(){
		let cryptos = this.props.cryptos;
		if(cryptos.length > 0){
			return cryptos.map(crypto => {
				return(
				  	<a onClick={this.handleOnClickA.bind(this)} key={crypto.id}>{crypto.name}</a>
				);
			});
		}
	}


	render(){
		return(
			<div className='container conversor-container'>
				<h4>Currency Converter</h4>
				<div className='input-container'>
					<div className="dropdown">
					  <button onClick={this.toggleShowClass.bind(this)} className="dropbtn dropbtn1">{this.state.selectedCrypto}<i className='ion-arrow-down-b'></i></button>
					  <div ref="myDropDown" id="myDropdown" className={`${this.state.dropClass1} dropdown-content`}>
					  	{this.renderDropCryptos()}
					  </div>
					</div>
					<span>to</span>
					<div className="dropdown">
					  <button onClick={this.toggleShowClass.bind(this)} className="dropbtn dropbtn2">Choose<i className='ion-arrow-down-b'></i></button>
					  <div id="myDropdown" className={`${this.state.dropClass2} dropdown-content`}>
						{this.renderDropCryptos()}
					  </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Conversor;

