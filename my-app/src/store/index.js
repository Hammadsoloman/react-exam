import {combineReducers, createStore ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import ReduxThunk from 'redux-thunk';


import data from './reducer';

let reducers = combineReducers({ data});
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store();