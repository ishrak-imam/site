
import React, { Component } from 'react'
import Form from './form';

import { connect } from 'react-redux';

class Container extends Component {

  render() {
    return (<Form {...this.props} />)
  }
}


function mapStateToProps(state, props) {
  return {
    form: props.config.name
  }
}

export default connect(mapStateToProps)(Container);