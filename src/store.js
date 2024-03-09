import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Importing Redux Thunk correctly
import rootReducer from './reducers';

const initialState = {};

const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;