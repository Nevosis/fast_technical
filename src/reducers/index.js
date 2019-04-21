import { combineReducers } from 'redux';
import appReducer from './appReducer';

// Combine Reducers
const reducers = combineReducers({
	appState: appReducer,
});

export default reducers;
