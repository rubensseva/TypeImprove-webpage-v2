import { createStore, compose } from 'redux';
import { myReducer } from './components/reducers/reducers';

const initialState = { text: "Initial state" };

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(myReducer, initialState, enhancers);

export default store;
