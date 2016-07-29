import React, { Component, PropTypes } from 'react';
import { Container, Heading } from 'rebass';
import BackButton from '../BackButton';
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

  render() {
    const { crawler } = this.props;
    const items = crawler.items.slice(1);
    const status = crawler.status;
    return (
      <Container mt={3}>
        <BackButton mb={2} onClick={() => this.clearItems()} />
        <Heading level={1}>
          Results ({status})
        </Heading>
        <ul className={styles.resultList}>
          {items.map((item, i) => <Result key={i} {...item} />)}
        </ul>
      </Container>
    );
  }
}
