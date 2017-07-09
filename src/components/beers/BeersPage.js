import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as beerActions from '../../actions/beerActions';

// Define as an ES6/2015 class component due to state requirements.
class BeersPage extends React.Component {
  constructor(props, context){
    super(props, context);

    //Initialize state.
    this.state = {
      beer: {name: ""}
    };

    //Make interactions referencable.
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

// Handling interactions.
  onTitleChange(event){
    const beer = this.state.beer;
    beer.name = event.target.value;
    this.setState({beer: beer});
  }

  onClickSave() {
    this.props.actions.createBeer(this.state.beer);
  }

// Renders methods.
  beerRow(beer, index){
    return <div key={index}>{beer.name}</div>;
  }

  render() {
    return(
      <div>
        <h1>Welcome to the Beers section!</h1>
        <p>Huzzah chug da boot!</p>

        {this.props.beers.map(this.beerRow)}

        <h2>Add Beer</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.beer.name} />
        
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

// Sets property types for each prop.
BeersPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BeersPage);
