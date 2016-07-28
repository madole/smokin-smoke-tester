import React, { Component, PropTypes } from 'react';

import styles from './view-table-component.scss';
import { Table, Input } from 'material-components';
import BackButton from '../back-button/back-button';


export default class ViewTable extends Component {
  static propTypes = {
    dataset: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      category: 'category'
    };
  }

  onInputChange(evt, category) {
    category = evt.target.value;
    console.log(category);
  }

  render() {
    const dataset = this.props.dataset || [];

    return (
      <div>
        <BackButton style={styles.backButton} />
        <div className={styles.table}>
          <Table className="paper1">
            <thead>
              <Table.Row>
                <th>Date</th>
                <th>Particulars</th>
                <th>Category</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </Table.Row>
            </thead>
            <tbody>
              {dataset.map((item, index) => {
                const category = 'category';
                return (
                  <Table.Row key={index}>
                    <td>{item.date}</td>
                    <td>{item.particulars}</td>
                    <td>{item.Category}</td>
                    <td>{item.debit}</td>
                    <td>{item.credit}</td>
                    <td>{item.balance}</td>
                    <td>
                      <div className={styles.select}>
                        <Input value={category} onChange={(evt) => this.onInputChange(evt, category)} />
                      </div>
                    </td>
                  </Table.Row>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
