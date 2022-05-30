import { render } from '@testing-library/react';
import axios from 'axios';
import Bitbucket from '.';

jest.mock('axios');

describe('Bitbucket', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Bitbucket />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
