import * as types from '../actions/actionTypes';

// Define beer reducers (action handlers).
export default function beerReducer(state = [], action) {
  switch(action.type){
    case types.CREATE_BEER :
      // Appends beer to existing list.
      return [...state,
        Object.assign({}, action.beer)
      ];
    
    case types.LOAD_BEERS_SUCCESS :
      return action.beers;

    default:
      return state;
  }
}