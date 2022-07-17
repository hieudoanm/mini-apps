import { useAxios } from '@package/shared';
import { Service, ServiceAPI } from '../../../configs';
import LoadingStatus from '../../molecules/LoadingStatus';

const Hedera: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.HEDERA);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.HEDERA}
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
      service={Service.HEDERA}
      refetch={refetch}
    />
  );
};

Hedera.displayName = 'Hedera';

export default Hedera;
