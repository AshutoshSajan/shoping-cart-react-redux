import { combineReducers, createStore } from 'redux';
import { size, Product, cart } from './reducer';

const rootReducer = combineReducers({
	size,
	Product,
	cart,
})

export const store = createStore(rootReducer)