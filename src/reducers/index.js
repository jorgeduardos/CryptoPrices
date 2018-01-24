import { combineReducers } from 'redux';
import CryptoReducer from './crypto_reducer.js';
import SingleCryptoReducer from './single_crypto_reducer.js';
import ErrorReducer from './error_reducer.js';

const rootReducer = combineReducers({
	cryptos: CryptoReducer,
	singleCrypto: SingleCryptoReducer,
	error: ErrorReducer
});

export default rootReducer;