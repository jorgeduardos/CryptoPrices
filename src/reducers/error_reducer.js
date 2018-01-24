import { FETCH_SINGLE_CRYPTO_ERROR } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_SINGLE_CRYPTO_ERROR:
			return action.payload;
		default: 
			return state;
	}
}