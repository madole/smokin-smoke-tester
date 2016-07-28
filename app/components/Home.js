import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Container, Heading, Input } from 'rebass';
import styles from './Home.scss';

export default class Home extends Component {
  static propTypes = {
    startCrawling: PropTypes.func.isRequired
  }

  startCrawling() {
    this.props.startCrawling();
  }

  render() {
    return (
      <div className={styles.root}>
        <Container style={{ maxWidth: 720 }}>
          <div className={styles.header}>
            <Heading level={1}>Smokin Smoke Tester</Heading>
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={styles.url}
              label="URL"
              name="url"
              placeholder="URL"
              type="text"
              rounded
              hideLabel
            />
            <Input
              className={styles.depthLimit}
              label="Depth Limit"
              name="depthLimit"
              value={2}
              type="number"
              rounded
              hideLabel
            />
          </div>
          <div className={styles.button}>
            <Button onClick={this.startCrawling.bind(this)}>Smoke it!</Button>
          </div>
        </Container>
      </div>
    );
  }

}
