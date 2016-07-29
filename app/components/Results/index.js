import React, { Component, PropTypes } from 'react';
import { Container, Button, ButtonCircle } from 'rebass';
import { Flex, Box } from 'reflexbox';
import BackButton from '../BackButton';
import MainResult from '../MainResult';
import Result from '../Result';
import styles from './styles.scss';

import { SUCCESS } from '../../actions/filter-actions';

export default class Results extends Component {
  static propTypes = {
    crawler: PropTypes.object.isRequired,
    clearItems: PropTypes.func,
    stopCrawling: PropTypes.func.isRequired,
    filteredItems: PropTypes.array.isRequired,
    failureFilter: PropTypes.func.isRequired,
    warningFilter: PropTypes.func.isRequired,
    successFilter: PropTypes.func.isRequired,
    allFilter: PropTypes.func.isRequired
  }

  clearItems() {
    console.info('clearing items & stopping crawling');
    this.props.stopCrawling();
    this.props.clearItems();
    this.props.allFilter();
  }

  renderMainResult(mainResult, results) {
    const { url, depthLimit } = this.props.crawler;
    const successes = results.filter(result => result.status === SUCCESS);
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
    const { filteredItems, crawler } = this.props;
    const mainResult = crawler.items[0];
    const allItems = crawler.items;
    return (
      <Container mt={3}>
        <BackButton mb={2} onClick={() => this.clearItems()} />
        {this.renderMainResult(mainResult, allItems)}

        <Flex justify="flex-start" className={styles.flex}>
          <div className={styles.filterButton}>
            <Button big color="white" backgroundColor="#2D3137" onClick={() => this.props.allFilter()}> All </Button>
          </div>
          <div className={styles.filterButton}>
            <Button big color="white" backgroundColor="#2D3137" onClick={() => this.props.successFilter()}>Successes</Button>
          </div>
          <div className={styles.filterButton}>
            <Button big color="white" backgroundColor="#2D3137" onClick={() => this.props.warningFilter()}>Warnings</Button>
          </div>
          <div className={styles.filterButton}>
            <Button big color="white" backgroundColor="#2D3137" onClick={() => this.props.failureFilter()}>Failures</Button>
          </div>
          <Box align="center" col={12} ml={1} className={styles.count}>{filteredItems.length}</Box>
        </Flex>

        <ul className={styles.resultList}>
          {filteredItems.map((result, i) => <Result key={i} {...result} />)}
        </ul>
      </Container>
    );
  }
}
