import { render } from '@testing-library/react';
import axios from 'axios';
import GitHub from '.';

jest.mock('axios');

describe('GitHub', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<GitHub />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
