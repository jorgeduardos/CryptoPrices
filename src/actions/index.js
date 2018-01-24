import axios from 'axios';

export const FETCH_CRYPTOS = 'fetch_cryptos';
export const FETCH_SINGLE_CRYPTO = 'fetch_single_crypto';
export const DELETE_CRYPTO = 'delete_crypto';
export const FETCH_SINGLE_CRYPTO_ERROR = 'fetch_single_crypto_error';

const limitGlobal = 500;
const limitString = `?limit=${limitGlobal}`;
const url = 'https://api.coinmarketcap.com/v1/ticker';

export function fetchCryptos(){
	const request = axios.get(`${url}/${limitString}`).catch(function(error){
		console.log(error);
	});


	return{
		type: FETCH_CRYPTOS,
		payload: request
	}
}

export function fetchSingleCrypto(id){
	let error = {display: false, errorMsg: ''};

	const request = axios.get(`${url}/${id}/`);

	if(error.display){
		return {
			type: FETCH_SINGLE_CRYPTO_ERROR,
			payload: error
		}
	}else{
		return {
			type: FETCH_SINGLE_CRYPTO,
			payload: request
		};
	}
}

export function deleteSingleCrypto(){
	console.log('inside deleteSingleCrypto action');
	return {
		type: DELETE_CRYPTO
	}
}