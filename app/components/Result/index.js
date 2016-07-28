import React, { Component, PropTypes } from 'react';

export default class Result extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    stateData: PropTypes.object.isRequired
  }

  render() {
    const { path, depth, stateData } = this.props;
    return (
      <li>
        <p>{path}<span> {depth}</span></p>
        {JSON.stringify(stateData)}
      </li>
    );
  }

}
