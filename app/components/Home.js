import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Container, Heading, Input } from 'rebass';
import styles from './Home.scss';

export default class Home extends Component {
  static propTypes = {
    beginCrawling: PropTypes.func.isRequired
  }

  beginCrawling() {
    this.props.beginCrawling({
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
              defaultValue={2}
              type="number"
              rounded
              hideLabel
            />
          </div>
          <div className={styles.button}>
            <Link to="/results">
              <Button onClick={this.beginCrawling.bind(this)}>
                Smoke it!
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

}
