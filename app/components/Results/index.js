import React, { Component, PropTypes } from 'react';
import { Heading } from 'rebass';
import Result from '../Result';

export default class Results extends Component {
  static propTypes = {
    crawler: PropTypes.object.isRequired
  }

  render() {
    const { crawler } = this.props;
    const items = crawler.items;
    const status = crawler.status;
    return (
      <div>
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
