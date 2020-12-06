import {createStore} from 'redux';
import {reducer} from '../Reducers/Reducer';

export const store=createStore(reducer ,/* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())