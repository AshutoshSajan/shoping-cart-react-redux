import React from 'react';
import { combineReducers, createStore } from 'redux';
import { size, Product, filter, cart } from './reducer';

const rootReducer = combineReducers({
	size,
	Product,
	filter,
	cart
})

export const store = createStore(rootReducer);

console.log(store)