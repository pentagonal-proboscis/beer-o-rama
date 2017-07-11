import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BeerListRow = ({beer}) => {
  return(
    <tr>
      <td>{beer.id}</td>
      <td>{beer.name}</td>
      <td>{beer.brewery}</td>
      <td>{beer.price}</td>
    </tr>  
  );
};

BeerListRow.propTypes = {
  beer: PropTypes.object.isRequired
};

export default BeerListRow;