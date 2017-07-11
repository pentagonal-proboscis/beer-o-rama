import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as beerActions from '../../actions/beerActions';

class ManageBeerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
}

  render() {
    return (
      <p>blah</p>
    );
  }
}

ManageBeerPage.PropTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    state:state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(beerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBeerPage);