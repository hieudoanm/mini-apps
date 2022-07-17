import { useAxios } from '@package/shared';
import { Service, ServiceAPI } from '../../../configs';
import LoadingStatus from '../../molecules/LoadingStatus';

const Confluence: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(
    ServiceAPI.CONFLUENCE
  );

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.CONFLUENCE}
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
      service={Service.CONFLUENCE}
      refetch={refetch}
    />
  );
};

Confluence.displayName = 'Confluence';

export default Confluence;
