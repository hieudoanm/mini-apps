import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '.';

describe('Navbar', () => {
  test('render default', () => {
    const wrapper = render(<Navbar title="Apps" />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
