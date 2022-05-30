import { Service, ServiceAPI } from '../../../configs';
import useAxios from '../../../hooks/useAxios';
import LoadingStatus from '../../molecules/LoadingStatus';

const Vercel: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(ServiceAPI.VERCEL);

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.VERCEL}
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
      service={Service.VERCEL}
      refetch={refetch}
    />
  );
};

Vercel.displayName = 'Vercel';

export default Vercel;
