import { useAxios } from 'shared';
import { Service, ServiceAPI } from '../../../configs';
import LoadingStatus from '../../molecules/LoadingStatus';

const Discord: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.DISCORD);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.DISCORD}
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
      service={Service.DISCORD}
      refetch={refetch}
    />
  );
};

Discord.displayName = 'Discord';

export default Discord;
