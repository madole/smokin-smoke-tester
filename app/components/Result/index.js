import React, { Component, PropTypes } from 'react';
import { Text } from 'rebass';
import styles from './styles.scss';

export default class Result extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    stateData: PropTypes.object.isRequired
  }

  render() {
    const { url, path, depth, stateData } = this.props;
    return (
      <li
        className={styles.root}
        style={{
          marginLeft: 40 * (depth - 2)
        }}
      >
        <Text bold><a href={url} target="_blank">{path}</a></Text>

        <ul className={styles.details}>
          <li><span>Depth</span>{depth}</li>
          <li><span>Response Time</span>{stateData.requestTime}</li>
          <li><span>Status Code</span>{stateData.code}</li>
          <li><span>Time</span>{stateData.headers.date}</li>
          <li><span>Type</span>{stateData.contentType}</li>
        </ul>
      </li>
    );
  }

}
