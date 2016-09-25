import React, { Component, PropTypes } from 'react';
import { Text } from 'rebass';
import { Flex, Box } from 'reflexbox';
import styles from './styles.scss';

export default class Result extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    responseTime: PropTypes.number.isRequired,
    statusCode: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired
  }

  render() {
    const {
      url,
      path,
      depth,
      responseTime,
      statusCode,
      time,
      type,
      status,
      contentType
    } = this.props;

    return (
      <li className={styles.root}>
        <Flex>
          <Box col={1} className={styles[status]} />
          <Box col={11} className={styles.details}>
            <Text bold style={{ display: 'inline' }}>
              <a href={url} target="_blank">{url}</a>
              <div className={styles.statusCode}>
                <span>{statusCode}</span>
              </div>
              <div className={styles.statusCode}>
                <span>{type}</span>
              </div>
            </Text>

            <ul className={styles.extraDetails}>
              <li><span>Response Time</span>{responseTime}ms</li>
              <li><span>Depth</span>{depth}</li>
            </ul>
          </Box>
        </Flex>
      </li>
    );
  }

}
