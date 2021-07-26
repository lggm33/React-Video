/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const initialState = {
  'user': { email: '', password: '', name: '' },
  'playing': {},
  'mylist': [],
  'trends': [],
  'originals': [],
};

const middleWare = [reduxThunk];
const middleWareEnhnacer = applyMiddleware(...middleWare);

const enhancers = [middleWareEnhnacer];

const composeEnhancers = composeWithDevTools(...enhancers);

const store = createStore(
  reducers,
  initialState,
  composeEnhancers,
);

export default store;
