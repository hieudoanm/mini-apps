import { render } from '@testing-library/react';
import axios from 'axios';
import Solana from '.';

jest.mock('axios');

describe('Solana', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Solana />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
