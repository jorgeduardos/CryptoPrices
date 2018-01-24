import { FETCH_SINGLE_CRYPTO, DELETE_CRYPTO } from '../actions';
import _ from 'lodash'; 

export default function(state = {}, action){
	switch(action.type){
		case FETCH_SINGLE_CRYPTO:
			const crypto =  action.payload.data[0];
			return crypto;
		case DELETE_CRYPTO:
			return {};
		default:
			return state;
	}	

	return cryptos;
}