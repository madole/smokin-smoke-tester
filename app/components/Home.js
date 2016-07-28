import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'rebass';
import styles from './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className={styles.container}>
        <h2>Smokin Smoke Tester</h2>
        <Button><Link to="/results">Push It!</Link></Button>
      </div>
    );
  }

}
