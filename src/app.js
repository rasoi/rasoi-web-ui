"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';



import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';


// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';


// STEP 1 create and store
const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from "./components/footer";

render(
  <Provider store={store}>
    <div>
      <Menu/>
      <BooksList/>
      <Footer/>
    </div>

  </Provider>, document.getElementById('app')
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
