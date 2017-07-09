import { combineReducers } from 'redux';
import beers from './beerReducer';

// Root reducer which registers all other reducers.
// Note: All actions propagate to all reducers registered.
const rootReducer = combineReducers({
  beers
});

export default rootReducer;