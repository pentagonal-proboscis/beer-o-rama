//Define all actions and their parameters.
import * as types from './actionTypes';

export function createBeer(beer) {
  return { type: types.CREATE_BEER, beer };
}