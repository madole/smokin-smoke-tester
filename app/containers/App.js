import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext() {
    return {
      rebass: {
        borderColor: 'transparent',
        borderRadius: 2,
        colors: {
          primary: '#F45C54',
          success: '#00BB77'
        },
        fontSizes: [
          54,
          40,
          32,
          24,
          20,
          16,
          14
        ]
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
