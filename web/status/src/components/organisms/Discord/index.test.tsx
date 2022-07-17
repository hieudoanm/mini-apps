import { render } from '@testing-library/react';
import axios from 'axios';
import Discord from '.';

jest.mock('axios');

describe('Discord', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Discord />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
