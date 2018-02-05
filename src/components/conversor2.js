import React, {Component} from 'react';
import Select from 'react-select';
import sortBy from 'sort-by';
import numeral from 'numeral';
import styles from '../../style/css/select_style.css';

class Conversor extends Component {
	constructor(props){
		super(props);

		this.state = {
			selectedCrypto: props.crypto || {},
			cryptoToConvert: {name: 'USD'},
			amount: 0,
			result: 0
		}
	}

	componentWillReceiveProps (nextProps) {
	    this.setState({
	      selectedCrypto: nextProps.crypto,
	    });
	}
		
	updateValue (newValue) {
		let result = this.conversorFunc(this.state.amount, newValue, this.state.cryptoToConvert);
		this.setState({
			selectedCrypto: newValue,
			result
		});
	}

	updateValue2(newValue){
		let result = this.conversorFunc(this.state.amount, this.state.selectedCrypto, newValue);
		this.setState({
			cryptoToConvert: newValue,
			result
		});
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
			result = numeral((inputCrypto.price_usd/ouputCrypto.price_usd)*parseInt(amount)).format('0,0.00');
		}
		return result;
	}


	render(){
		return(
			<div className='container conversor-container'>
				{console.log(this.state.selectedCrypto)}
				<h4>Currency Converter</h4>
				<div className='input-container'>
					<input onKeyUp={this.converterHandler.bind(this)} placeholder='Enter Amount To Convert' className='amount form-control' type="text"/>
					<div className='selectComp-div'>
						<Select
							name="crypto-select"
							value={this.state.selectedCrypto}
							onBlurResetsInput={false}
							onSelectResetsInput={false}
							clearable={false}
							onChange={this.updateValue.bind(this)}
							searchable={true}
							options={this.props.cryptos}
							labelKey='name'
							valueKey='name'
						/>
					</div>
					<span>to</span>
					<div className='selectComp-div'>
						<Select
							name="crypto-select"
							value={this.state.cryptoToConvert}
							clearable={false}
							onChange={this.updateValue2.bind(this)}
							searchable={true}
							options={this.props.cryptos}
							labelKey='name'
							valueKey='name'
						/>
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

