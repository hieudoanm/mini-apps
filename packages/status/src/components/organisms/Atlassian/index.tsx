import { Service, ServiceAPI } from '../../../configs';
import useAxios from '../../../hooks/useAxios';
import LoadingStatus from '../../molecules/LoadingStatus';

const Atlassian: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.ATLASSIAN);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.ATLASSIAN}
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
      service={Service.ATLASSIAN}
      refetch={refetch}
    />
  );
};

Atlassian.displayName = 'Atlassian';

export default Atlassian;
