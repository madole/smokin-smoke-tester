import React from 'react';
import { shallow } from 'enzyme';
import BackButton from '../../app/components/back-button/back-button';
import test from 'ava';

const props = {
  style: 'thing'
};

test('backButton applies class when passed in', t => {
  const wrapper = shallow(<BackButton style={props.style} />);
  t.truthy(wrapper.hasClass('thing'));
});

test('backbutton has no class when nothing passed in', t => {
  const wrapper = shallow(<BackButton />);
  t.truthy(wrapper.hasClass(''));
});

test('backButton should have a Link component', t => {
  const wrapper = shallow(<BackButton style={props.style} />);
  t.is(wrapper.find('Link').length, 1);
});

test('backButton Link should point to /', t => {
  const wrapper = shallow(<BackButton style={props.style} />);
  const link = wrapper.find('Link').get(0);
  t.is(link.props.to, '/');
});
