"use strict"
import {combineReducers} from 'redux';

// IMPORT REDUCERS TO BE COMBINED
import {recipeReducers} from './recipeReducers';
import {cartReducers} from './cartReducers';
// HERE COMBINE THE recipeReducers
export default combineReducers({
  books: recipeReducers,
  cart: cartReducers
})
