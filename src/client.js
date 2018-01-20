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
import {postBooks, deleteBooks, updateBooks} from './actions/recipeActions';


// STEP 1 create and store
const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);


import RecipesList from './components/pages/home';
import Cart from './components/pages/cart';
import RecipeForm from './components/pages/recipeForm';
import Main from './main';

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={RecipesList}/>
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
