import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <h1>Welcome to the beer app!</h1>
        <p>Beer is one of life's most fantastic inventions. It is both tasty, satisfying and leaves you feeling good!</p>
        <p>Drink IPAs, Saisons, Goses and Lagers all from the comfort of your own home!</p>
        <p>When you feel the desire to drink else where check out the brewery API for inpiration :)</p>
      </div>
    );
  }
}

export default HomePage;
