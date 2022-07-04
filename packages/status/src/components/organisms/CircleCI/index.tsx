import { useAxios } from 'shared';
import { Service, ServiceAPI } from '../../../configs';
import LoadingStatus from '../../molecules/LoadingStatus';

const CircleCI: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.CIRCLE_CI);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.CIRCLE_CI}
        refetch={refetch}
      />
    );
  }

  const active: boolean = data.status.indicator === 'none';

  return (
    <LoadingStatus
      loading={loading}
      error={error}
      data={data}
      active={active}
      service={Service.CIRCLE_CI}
      refetch={refetch}
    />
  );
};

CircleCI.displayName = 'CircleCI';

export default CircleCI;
