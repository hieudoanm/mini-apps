import { useAxios } from 'shared';
import { Service, ServiceAPI } from '../../../configs';
import LoadingStatus from '../../molecules/LoadingStatus';

const Bitbucket: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(
    ServiceAPI.BIT_BUCKET
  );

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.BIT_BUCKET}
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
      service={Service.BIT_BUCKET}
      refetch={refetch}
    />
  );
};

Bitbucket.displayName = 'Bitbucket';

export default Bitbucket;
