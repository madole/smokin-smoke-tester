import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import SpendByCategory from '../../app/components/spend-by-category/spend-by-category-component';

const dataset = [
  {
    Category: 'Spendage',
    debit: '$120',
    credit: '$100'
  },
  {
    Category: 'Beers',
    debit: '$1200',
    credit: '$1000'
  }
];

test('should have a backButton', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  t.is(wrapper.find('BackButton').length, 1);
});

test('should have paper1 style', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  t.is(wrapper.find('.paper1').length, 1);
});

test('should have header style applied', t => {
  const props = { dataset };
  const scopedClassName = 'spend-by-category-component__header';
  const wrapper = shallow(<SpendByCategory {...props} />);
  t.truthy(wrapper.find('.paper1').hasClass(scopedClassName));
});

test('should have a PieChart', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  t.is(wrapper.find('PieChart').length, 1);
});

test('PieChart should have height of 400', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  const pieChart = wrapper.find('PieChart');
  t.is(pieChart.get(0).props.height, '400');
});

test('PieChart should have width of 800', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  const pieChart = wrapper.find('PieChart');
  t.is(pieChart.get(0).props.width, '800');
});

test('labels should contain Spendage and Beers', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  const pieChart = wrapper.find('PieChart');
  t.truthy(pieChart.get(0).props.data.labels[0] === 'Spendage');
  t.truthy(pieChart.get(0).props.data.labels[1] === 'Beers');
});

test('PieChart options should have cutoutPercentage of 25', t => {
  const props = { dataset };
  const wrapper = shallow(<SpendByCategory {...props} />);
  const pieChart = wrapper.find('PieChart');
  t.is(pieChart.get(0).props.options.cutoutPercentage, 25);
});
