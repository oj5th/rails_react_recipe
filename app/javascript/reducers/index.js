import { combineReducers } from 'redux';
import recipesReducer from './recipes';

export const allReducers = combineReducers({
  things: recipesReducer,
})

export default allReducers;
