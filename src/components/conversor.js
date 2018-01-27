import React, {Component} from 'react';
import sortBy from 'sort-by';
import numeral from 'numeral';

class Conversor extends Component {
	constructor(props){
		super(props);

		this.state = {
			dropClass1: '',
			dropClass2: '',
			selectedCrypto: {name: ' '},
			cryptoToConvert: {name: 'USD'},
			amount: 0,
			result: 0
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
		if(event.target.className == 'a1'){
			this.props.cryptos.map(crypto => {
				if(crypto.name == event.target.textContent){
					this.setState({selectedCrypto: crypto, dropClass1: ''});
				}
			});
		}else{
			this.props.cryptos.map(crypto => {
				if(crypto.name == event.target.textContent){
					this.setState({cryptoToConvert: crypto, dropClass2: ''});
				}
			});
		}
		// event.target.className == 'a1' ? this.setState({selectedCrypto: event.target.textContent}) : this.setState({cryptoToConvert: event.target.textContent})
	}

	renderDropCryptos(className){
		let cryptos = this.props.cryptos.sort(sortBy('name'));
		if(cryptos.length > 0){
			return cryptos.map(crypto => {
				return(
				  	<a className={className} onClick={this.handleOnClickA.bind(this)} key={crypto.id}>{crypto.name}</a>
				);
			});
		}
	}

	converterHandler(event){

		let inputCrypto = this.state.selectedCrypto;
		let ouputCrypto = this.state.cryptoToConvert;
		
		let result = this.conversorFunc(event.target.value, inputCrypto, ouputCrypto);
		this.setState({result, amount: event.target.value});

	}

	conversorFunc(amount, inputCrypto, ouputCrypto){
		let result;
		if(ouputCrypto.name == 'USD'){
			result = numeral(inputCrypto.price_usd*parseInt(amount)).format('0,0.00');
		}else{
			result = numeral((inputCrypto.price_usd/ouputCrypto.price_usd)*parseInt(event.target.value)).format('0,0.00');
		}
		return result;
	}


	render(){
		return(
			<div className='container conversor-container'>
				<h4>Currency Converter</h4>
				<div className='input-container'>
					<input onKeyUp={this.converterHandler.bind(this)} placeholder='Enter Amount To Convert' className='amount form-control' type="text"/>
					<div className="dropdown">
					  <button onClick={this.toggleShowClass.bind(this)} className="dropbtn dropbtn1">{this.state.selectedCrypto.name}<i className='ion-arrow-down-b'></i></button>
					  <div ref="myDropDown" id="myDropdown" className={`${this.state.dropClass1} dropdown-content`}>
					  	{this.renderDropCryptos("a1")}
					  </div>
					</div>
					<span>to</span>
					<div className="dropdown">
					  <button onClick={this.toggleShowClass.bind(this)} className="dropbtn dropbtn2">{this.state.cryptoToConvert.name}<i className='ion-arrow-down-b'></i></button>
					  <div id="myDropdown" className={`${this.state.dropClass2} dropdown-content`}>
						{this.renderDropCryptos("a2")}
					  </div>
					</div>
					<div className='result-div'>
						{this.state.amount}{this.state.selectedCrypto.name}={this.state.result}{this.state.cryptoToConvert.name}
					</div>
				</div>
			</div>
		);
	}
}

export default Conversor;

