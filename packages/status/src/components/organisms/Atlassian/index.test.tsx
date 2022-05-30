import { render } from '@testing-library/react';
import axios from 'axios';
import Atlassian from '.';

jest.mock('axios');

describe('Atlassian', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Atlassian />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
