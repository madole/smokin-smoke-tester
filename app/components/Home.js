import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import { Button } from 'material-components';


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
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Button primary><Link to="/upload">Upload File</Link></Button>
          <Button primary><Link to="/view-table">View Table</Link></Button>
          <Button primary><Link to="/spend-over-time">Spend over time</Link></Button>
          <Button primary><Link to="/spend-by-category">Spend by Category</Link></Button>
          <Button flat onTouchTap={this.deleteDataset.bind(this)}>Delete Dataset</Button>
        </div>
      </div>
    );
  }
}
