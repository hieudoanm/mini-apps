import { render } from '@testing-library/react';
import axios from 'axios';
import Confluence from '.';

jest.mock('axios');

describe('Confluence', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Confluence />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
