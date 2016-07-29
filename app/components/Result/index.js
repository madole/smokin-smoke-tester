import React, { Component, PropTypes } from 'react';
import { Text } from 'rebass';
import styles from './styles.scss';

export default class Result extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    responseTime: PropTypes.number.isRequired,
    statusCode: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  render() {
    const { url, path, depth, responseTime, statusCode, time, type } = this.props;
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
          <li><span>Response Time</span>{responseTime}</li>
          <li><span>Status Code</span>{statusCode}</li>
          <li><span>Time</span>{time}</li>
          <li><span>Type</span>{type}</li>
        </ul>
      </li>
    );
  }

}
