import React, {PropTypes} from 'react';
import BeerListRow from './BeerListRow';

const BeersList = ({beers}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Brewery</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {beers.map(beer => 
        <BeerListRow key={beer.id} beer={beer}/>
      )}
      </tbody>
    </table>
  );
};

BeersList.propTypes = {
  beers: PropTypes.array.isRequired
};

export default BeersList;