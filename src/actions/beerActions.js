//Define all actions and their parameters.
import * as types from './actionTypes';
import beerApi from '../api/mockBeerApi';

export function createBeer(beer) {
  return { type: types.CREATE_BEER, beer };
}

export function loadBeersSuccess(beers)
{
  return {type: types.LOAD_BEERS_SUCCESS, beers};
}

export function loadBeers() {
  return function(dispatch) {
    return beerApi.getAllBeers().then( beers => {
      dispatch(loadBeersSuccess(beers));
    }).catch(error => {
      throw(error);
    });
  };
}