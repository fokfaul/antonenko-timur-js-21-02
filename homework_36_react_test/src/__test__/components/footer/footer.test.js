import React from 'react';
import { shallow } from 'enzyme';
import {Footer} from '../../../components/footer/Footer';

describe('Footer component test', () => {
  test('should render footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer.main-footer')).toHaveLength(1);
  });
});