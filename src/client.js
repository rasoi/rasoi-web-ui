"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';


import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';


// STEP 1 create and store
const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import RecipeForm from './components/pages/recipeForm';
import Main from './main';

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList}/>
        <Route path="/admin" component={RecipeForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>
    </Router>
  </Provider>
)

render(
  Routes,
  document.getElementById('app')
);

// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
//   [{
//     id: 1,
//     title: "Rasoi ki kitaab",
//     description: 'hohoho',
//     price: 6
//   },{
//     id: 2,
//     title: "Rasoi ki doosri kitaab",
//     description: 'hohoho',
//     price: 8.9
//   },
//   ]
// ))


// // DELETE a book
// store.dispatch(deleteBooks({id:1}))
//
//
// // UPDATE a books
// store.dispatch(updateBooks(
//   {
//     id:2,
//     title:'rasoi kaise saaf karien'
//   }
// ))


// CART actions
// ADD to CART
