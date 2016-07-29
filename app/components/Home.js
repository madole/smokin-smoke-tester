import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Container, Heading, Input, Radio } from 'rebass';
import styles from './Home.scss';

export default class Home extends Component {
  static propTypes = {
    beginCrawling: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      radio: 'html'
    };
  }

  beginCrawling() {
    this.props.beginCrawling({
      url: this._url.value,
      depthLimit: this._depthLimit.value,
      filter: this.state.radio
    });
  }

  handleRadioChange(e) {
    this.setState({ radio: e.target.value });
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
          <div className={styles.radio}>
            <Radio
              checked={this.state.radio === 'html'}
              circle
              label="Just html"
              name="radio_1"
              value="html"
              onChange={this.handleRadioChange.bind(this)}
            />
            <Radio
              circle
              checked={this.state.radio === 'everything'}
              label="Everything under the sun"
              name="radio_1"
              value="everything"
              onChange={this.handleRadioChange.bind(this)}
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
