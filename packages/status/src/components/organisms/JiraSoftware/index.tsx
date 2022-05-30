import { Service, ServiceAPI } from '../../../configs';
import useAxios from '../../../hooks/useAxios';
import LoadingStatus from '../../molecules/LoadingStatus';

const JiraSoftware: React.FC = () => {
  const { loading, error, data, refetch } = useAxios<any>(
    ServiceAPI.JIRA_SOFTWARE
  );

  if (!data) {
    return (
      <LoadingStatus
        loading={loading}
        error={error}
        data={data}
        active={false}
        service={Service.JIRA_SOFTWARE}
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
      service={Service.JIRA_SOFTWARE}
      refetch={refetch}
    />
  );
};

JiraSoftware.displayName = 'JiraSoftware';

export default JiraSoftware;
