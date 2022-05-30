import { Service, ServiceAPI } from '../../../configs';
import useAxios from '../../../hooks/useAxios';
import LoadingStatus from '../../molecules/LoadingStatus';

const Trello: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.TRELLO);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.TRELLO}
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
      service={Service.TRELLO}
      refetch={refetch}
    />
  );
};

Trello.displayName = 'Trello';

export default Trello;
