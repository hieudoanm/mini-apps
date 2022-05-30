import { render } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  test('render default', () => {
    const wrapper = render(
      <Button type="button" onClick={() => {}}>
        Button
      </Button>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
