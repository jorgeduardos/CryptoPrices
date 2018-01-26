import { FETCH_CRYPTOS } from '../actions';
import _ from 'lodash'; 

export default function(state = [], action){
	switch(action.type){
		case FETCH_CRYPTOS:
			return action.payload.data;
		default:
			return state;
	}	

	return cryptos;
}