import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as beerActions from '../../actions/beerActions';
import BeersList from './BeersList';

// Define as an ES6/2015 class component due to state requirements.
class BeersPage2 extends React.Component {
  constructor(props, context){
    super(props, context);
  }

// Renders methods.
  beerRow(beer, index){
    return <div key={index}>{beer.name}</div>;
  }

  render() {
    const {beers} = this.props;

    return(
      <div>
        <h1>Welcome to the Beers section!</h1>
        <p>Huzzah chug da boot!</p>

        <BeersList beers={beers} />

      </div>
    );
  }
}

// Sets property types for each prop.
BeersPage2.propTypes = {
  beers: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

// Linking the React code to the Redux store
// Maps the Redux store state to the React app props.
function mapStateToProps(state, ownProps) {
  return {
    beers: state.beers
  };
}

// Wraps every action in the appropriate dispatch call to be sent to Redux reducers.
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(beerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeersPage2);
