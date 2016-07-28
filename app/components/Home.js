import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Container, Heading, Input } from 'rebass';
import styles from './Home.scss';

export default class Home extends Component {
  static propTypes = {
    startCrawling: PropTypes.func.isRequired
  }

  startCrawling() {
    this.props.startCrawling({
      url: this._url.value,
      depthLimit: this._depthLimit.value
    });
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
              baseRef={(input) => { this._url = input; }}
              className={styles.url}
              label="URL"
              name="url"
              placeholder="URL"
              type="text"
              rounded
              hideLabel
            />
            <Input
              baseRef = {(input) => { this._depthLimit = input; }}
              className={styles.depthLimit}
              label="Depth Limit"
              name="depthLimit"
              placeholder={2}
              type="number"
              rounded
              hideLabel
            />
          </div>
          <div className={styles.button}>
            <Button onClick={this.startCrawling.bind(this)}>
              <Link to="/results">Smoke it!</Link>
            </Button>
          </div>
        </Container>
      </div>
    );
  }

}
