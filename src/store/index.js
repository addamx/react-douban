import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    // compose(applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension())
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
};

export default store;
