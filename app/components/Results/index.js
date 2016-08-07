import React, { Component, PropTypes } from 'react';
import { Container } from 'rebass';
import { Flex } from 'reflexbox';
import BackButton from '../BackButton';
import MainResult from '../MainResult';
import Result from '../Result';
import styles from './styles.scss';
import FilterButtons from '../FilterButtons';
import SortButtons from '../SortButtons';

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
    allFilter: PropTypes.func.isRequired,
    sortResponseTimeDesc: PropTypes.func.isRequired,
    sortResponseTimeAsc: PropTypes.func.isRequired
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
        <Flex justify="space-between">
          <FilterButtons
            filteredItemsLength={filteredItems.length}
            styles={styles}
            {...this.props}
          />
          <SortButtons styles={styles} {...this.props} />
        </Flex>
        <ul className={styles.resultList}>
          {filteredItems.map((result, i) => <Result key={i} {...result} />)}
        </ul>
      </Container>
    );
  }
}
