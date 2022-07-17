import { useAxios } from '@package/shared';
import { Service, ServiceAPI } from '../../../configs';
import LoadingStatus from '../../molecules/LoadingStatus';

const Solana: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.SOLANA);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.SOLANA}
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
      service={Service.SOLANA}
      refetch={refetch}
    />
  );
};

Solana.displayName = 'Solana';

export default Solana;
