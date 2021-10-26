import { createStore } from 'redux';
import reducers from './reducers';
import initState from './state';


const store = createStore(reducers, initState);

export default store;