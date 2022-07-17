import { render } from '@testing-library/react';
import axios from 'axios';
import Hedera from '.';

jest.mock('axios');

describe('Hedera', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Hedera />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
