import React, { Component, PropTypes } from 'react';
import { Donut, Heading, Stat } from 'rebass';
import { Flex, Box } from 'reflexbox';
import styles from './styles.scss';

export default class MainResult extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    depthLimit: PropTypes.number.isRequired,
    hits: PropTypes.number,
    responseTime: PropTypes.number,
    statusCode: PropTypes.number
  }

  renderStatusCode() {
    const { statusCode } = this.props;

    if (statusCode) {
      return (
        <div className={styles.statusCode}>
          <span>{statusCode}</span>
        </div>
      );
    }
  }

  render() {
    const { url, depthLimit, hits, responseTime, satisfaction, average } = this.props;

    return (
      <div className={styles.root}>
        <Flex>
          <Box auto className={styles.details}>
            <Heading level={2} bold style={{ display: 'inline', lineHeight: 1 }}>
              <a href={url} target="_blank">{url}</a>
              {this.renderStatusCode()}
            </Heading>

            <ul className={styles.extraDetails}>
              {responseTime ? <li><span>Depth Limit</span>{depthLimit}</li> : null}
              {responseTime ? <li><span>Response Time</span>{responseTime}ms</li> : null}
            </ul>
          </Box>
          <Box pr={3} align="center">
            <Stat label="Average Response" value={average} unit="ms" />
          </Box>
          <Box pr={3} align="center">
            <Stat label="Pages Crawled" value={hits} />
          </Box>
          <Donut strokeWidth={10} color="success" value={satisfaction} m={3} ml={1} size={120} />
        </Flex>
      </div>
    );
  }

}
