import {createStore, combineReducers} from 'redux';

import {peopleReducer} from './reducers';


const reducers = combineReducers({
    'peoples' : peopleReducer
})

export const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());