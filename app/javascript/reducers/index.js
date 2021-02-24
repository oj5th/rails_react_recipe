import { combineReducers } from 'redux';
import recipesReducer from './recipes';

export const allReducers = combineReducers({
  recipes: recipesReducer,
})

export default allReducers;
