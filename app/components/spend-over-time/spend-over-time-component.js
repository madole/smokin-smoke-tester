import React, { Component, PropTypes } from 'react';
import styles from './spend-over-time-component.scss';
import BackButton from '../back-button/back-button';
import { Line as LineChart } from 'react-chartjs';
import { colors } from '../../variables';

export default class SpendOverTime extends Component {
  static propTypes = {
    dataset: PropTypes.array
  };

  render() {
    const headerStyle = `${styles.header} paper1`;
    let labels;
    let debitChartData;
    let balanceChartData;
    if (this.props.dataset) {
      labels = this.props.dataset.map(item => item.date);
      debitChartData = this.props.dataset.map(item => {
        const debitNoDollar = item.debit.replace('$', '').replace('\'', '');
        return (debitNoDollar === '') ? 0 : parseFloat(debitNoDollar);
      });

      balanceChartData = this.props.dataset.map(item => {
        const balanceNoDollar = item.balance.replace('$', '').replace('\'', '');
        return (balanceNoDollar === '') ? 0 : parseFloat(balanceNoDollar);
      });
    }

    const data = {
      labels,
      datasets: [{
        label: 'Spendage',
        data: debitChartData,
        fill: false,
        lineTension: 0.1,
        backgroundColor: colors.orange,
        borderColor: colors.red,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: colors.orange,
        pointBackgroundColor: colors.red,
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: colors.orange,
        pointHoverBorderColor: colors.red,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
      }, {
        label: 'Balance',
        data: balanceChartData,
        fill: false,
        lineTension: 0.1,
        backgroundColor: colors.yellow,
        borderColor: colors.orange,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: colors.yellow,
        pointBackgroundColor: colors.orange,
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: colors.yellow,
        pointHoverBorderColor: colors.orange,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
      }]
    };

    const options = {};

    return (
      <div>
        <BackButton style={styles.backButton} />
        <div className={headerStyle} padded>Spend over time</div>
        <LineChart data={data} height="400" width="800" options={options} />
      </div>
    );
  }
}
