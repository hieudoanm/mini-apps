import Status from '../../atoms/Status';

type LoadingStatusProps = {
  loading: boolean;
  error: any;
  data: any;
  active: boolean;
  service: string;
  refetch: () => void;
};

const LoadingStatus: React.FC<LoadingStatusProps> = ({
  loading,
  error,
  data,
  active,
  service,
  refetch,
}) => {
  if (loading) {
    return (
      <Status
        bgColor={'bg-gray-500'}
        status={'Loading'}
        service={service}
        refetch={refetch}
      />
    );
  }

  if (error) {
    return (
      <Status
        bgColor={'bg-red-500'}
        status={'Error'}
        service={service}
        refetch={refetch}
      />
    );
  }

  if (!data) {
    return (
      <Status
        bgColor={'bg-red-500'}
        status={'No Data'}
        service={service}
        refetch={refetch}
      />
    );
  }

  const status: string = active ? 'Active' : 'Inactive';
  const bgColor: string = active ? 'bg-green-500' : 'bg-red-500';

  return (
    <Status
      bgColor={bgColor}
      status={status}
      service={service}
      refetch={refetch}
    />
  );
};

LoadingStatus.displayName = 'LoadingStatus';

export default LoadingStatus;
