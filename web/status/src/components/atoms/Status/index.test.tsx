import { render } from '@testing-library/react';
import Status from '.';

describe('Status', () => {
  test('render default', () => {
    const wrapper = render(
      <Status
        bgColor="#fff"
        status="status"
        service="service"
        refetch={() => {}}
      />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
