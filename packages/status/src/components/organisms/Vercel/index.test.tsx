import { render } from '@testing-library/react';
import axios from 'axios';
import Vercel from '.';

jest.mock('axios');

describe('Vercel', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Vercel />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
