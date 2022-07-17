import { render } from '@testing-library/react';
import axios from 'axios';
import CircleCI from '.';

jest.mock('axios');

describe('CircleCI', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<CircleCI />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
