import axios from 'axios';

export const FETCH_CRYPTOS = 'fetch_cryptos';

const limitGlobal = 500;
const limitString = `?limit=${limitGlobal}`;
const url = `https://api.coinmarketcap.com/v1/ticker/${limitString}`;

export function fetchCryptos(){
	const request = axios.get(url);

	return{
		type: FETCH_CRYPTOS,
		payload: request
	}
}