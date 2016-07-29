import React, { Component, PropTypes } from 'react';
import { Container, Heading } from 'rebass';
import BackButton from '../BackButton';
import MainResult from '../MainResult';
import Result from '../Result';
import styles from './styles.scss';

export default class Results extends Component {
  static propTypes = {
    crawler: PropTypes.object.isRequired,
    clearItems: PropTypes.func,
    stopCrawling: PropTypes.func.isRequired
  }

  clearItems() {
    console.info('clearing items & stopping crawling');
    this.props.stopCrawling();
    this.props.clearItems();
  }

  renderMainResult(mainResult, results) {
    const { url, depthLimit } = this.props.crawler;

    const successes = results.filter(result => result.status === 'success');
    const satisfaction = successes.length / results.length;

    const average = Math.floor(results.reduce((a, b) => a + parseInt(b.responseTime, 10), 0) / results.length);

    return (
      <MainResult
        {...mainResult}
        url={url}
        depthLimit={depthLimit}
        hits={results.length}
        satisfaction={satisfaction || 0}
        average={average || 0}
      />
    );
  }

  render() {
    const { crawler } = this.props;
    const mainResult = crawler.items[0];
    const results = crawler.items.slice(1);

    return (
      <Container mt={3}>
        <BackButton mb={2} onClick={() => this.clearItems()} />
        {this.renderMainResult(mainResult, results)}
        <ul className={styles.resultList}>
          {results.map((result, i) => <Result key={i} {...result} />)}
        </ul>
      </Container>
    );
  }
}
