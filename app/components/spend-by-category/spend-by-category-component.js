import React, { Component, PropTypes } from 'React';
import BackButton from '../back-button/back-button';
import styles from './spend-by-category-component.scss';
import _ from 'lodash';
import { Pie as PieChart } from 'react-chartjs';

function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default class SpendByCategory extends Component {
  static propTypes = {
    dataset: PropTypes.array
  };

  getTotalsByGroup(dataset) {
    const groups = _.groupBy(dataset, item => item.Category);
    const groupsTotals = _.mapValues(groups, group => _.reduce(group, (sum, item) => {
      const debit = item.debit.replace('$', '').replace('\'', '');
      const value = parseFloat(debit);
      return sum + value;
    }, 0)

    );
    return _.omit(groupsTotals, ['']);
  }

  render() {
    let chartData;
    let labels;
    let colors;
    if (this.props.dataset) {
      const groupsAndTotals = this.getTotalsByGroup(this.props.dataset);
      labels = Object.keys(groupsAndTotals);
      chartData = _.values(groupsAndTotals);
      colors = chartData.map(() => getRandomColor());
    }

    const data = {
      labels,
      datasets: [{
        data: chartData,
        backgroundColor: colors
      }]
    };

    const options = {
      cutoutPercentage: 25
    };

    return (
      <div>
        <BackButton />
        <div className={`${styles.header} paper1`} padded>Spend by Category</div>
        <PieChart data={data} height="400" width="800" options={options} />
      </div>
      );
  }
}
