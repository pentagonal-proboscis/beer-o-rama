import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

// Define as an ES6/ES2015 Stateless component using anonymous function.
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/beers" activeClassName="active">Beers</Link>
      {" | "}
      <Link to="/breweries" activeClassName="active">Breweries</Link>
    </nav>
  );
};

export default Header;