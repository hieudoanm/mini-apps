import { render } from '@testing-library/react';
import LoadingStatus from '.';

describe('LoadingStatus', () => {
  test('render loading', () => {
    const wrapper = render(
      <LoadingStatus
        service="service"
        refetch={() => {}}
        loading={true}
        error={null}
        data={{}}
        active={false}
      />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  test('render error', () => {
    const wrapper = render(
      <LoadingStatus
        service="service"
        refetch={() => {}}
        loading={false}
        error={{ message: 'Error' }}
        data={{}}
        active={false}
      />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  test('render null data', () => {
    const wrapper = render(
      <LoadingStatus
        service="service"
        refetch={() => {}}
        loading={false}
        error={null}
        data={null}
        active={false}
      />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  test('render active', () => {
    const wrapper = render(
      <LoadingStatus
        service="service"
        refetch={() => {}}
        loading={false}
        error={null}
        data={{ status: 'ok' }}
        active={true}
      />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  test('render inactive', () => {
    const wrapper = render(
      <LoadingStatus
        service="service"
        refetch={() => {}}
        loading={false}
        error={null}
        data={{ status: 'ok' }}
        active={false}
      />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
