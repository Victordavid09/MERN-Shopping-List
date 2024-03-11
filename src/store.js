import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import of Redux Thunk
import rootReducer from './reducers';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware) // Applying the composeEnhancers to the middleware
);

export default store;