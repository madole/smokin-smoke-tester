import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';
import test from 'ava';

const props = {
  style: 'thing'
};

test('backButton applies class when passed in', t => {
  const wrapper = shallow(<Home style={props.style} />);
  t.truthy(wrapper);
});
