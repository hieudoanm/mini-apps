import { render } from '@testing-library/react';
import StatusTemplate from '.';

describe('StatusTemplate', () => {
  test('render default', () => {
    const wrapper = render(
      <StatusTemplate>
        <div></div>
      </StatusTemplate>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
