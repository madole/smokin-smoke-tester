import React, { Component, PropTypes } from 'react';
import { Heading } from 'rebass';
import BackButton from '../BackButton';
import Result from '../Result';

export default class Results extends Component {
  static propTypes = {
    crawler: PropTypes.object.isRequired,
    clearItems: PropTypes.func
  }

  clearItems() {
    console.log('clearing items');
    this.props.clearItems();
  }

  render() {
    const { crawler } = this.props;
    const items = crawler.items;
    const status = crawler.status;
    return (
      <div>
        <BackButton onClick={() => this.props.clearItems()} />
        <Heading level={1}>
          Results ({status})
        </Heading>
        <ul>
          {items.map((item, i) => <Result key={i} {...item} />)}
        </ul>
      </div>
    );
  }
}
