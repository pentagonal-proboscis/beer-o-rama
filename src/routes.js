import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import BreweriesPage from './components/breweries/BreweriesPage';
import BeersPage from './components/beers/BeersPage';
import BeersPage2 from './components/beers/BeersPage2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="breweries" component={BreweriesPage} />
    <Route path="beers" component={BeersPage} />
    <Route path="beers2" component={BeersPage2} />
  </Route>
);