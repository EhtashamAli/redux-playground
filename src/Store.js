import { applyMiddleware , createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index'; 

const initiialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initiialState,
    applyMiddleware(...middleware)
);

export default store;