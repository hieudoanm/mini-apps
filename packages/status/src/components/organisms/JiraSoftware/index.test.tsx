import { render } from '@testing-library/react';
import axios from 'axios';
import JiraSoftware from '.';

jest.mock('axios');

describe('JiraSoftware', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<JiraSoftware />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
