import { render } from '@testing-library/react';
import axios from 'axios';
import Trello from '.';

jest.mock('axios');

describe('Trello', () => {
  test('render default', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: { data: { status: { indicator: 'none' } } },
    });

    const wrapper = render(<Trello />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
