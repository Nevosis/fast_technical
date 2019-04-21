import { combineReducers } from 'redux';
import twitterReducer from './twitterReducer';

// Combine Reducers
const reducers = combineReducers({
	twitterState: twitterReducer
});

export default reducers;
