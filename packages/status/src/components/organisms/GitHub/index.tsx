import { Service, ServiceAPI } from '../../../configs';
import useAxios from '../../../hooks/useAxios';
import LoadingStatus from '../../molecules/LoadingStatus';

const GitHub: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.GIT_HUB);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.GIT_HUB}
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
      service={Service.GIT_HUB}
      refetch={refetch}
    />
  );
};

GitHub.displayName = 'GitHub';

export default GitHub;
