import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'rebass';
import styles from './Home.css';

export default class Home extends Component {

  static propTypes = {
    deleteDataset: PropTypes.func.isRequired,
    dataset: PropTypes.array
  };

  deleteDataset() {
    this.props.deleteDataset();
  }
  render() {
    return (
      <div className={styles.container}>
        <h2>Smokin Smoke Tester</h2>
        <Button primary><Link to="/results">Push It!</Link></Button>
      </div>
    );
  }
}
