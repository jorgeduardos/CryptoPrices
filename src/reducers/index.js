import { combineReducers } from 'redux';
import CryptoReducer from './crypto_reducer.js';

const rootReducer = combineReducers({
	cryptos: CryptoReducer
});

export default rootReducer;