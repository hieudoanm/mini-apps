import React from 'react';
import Button from '../Button';

export type StatusProps = {
  bgColor: string;
  status: string;
  service: string;
  refetch: () => void;
};

const Status: React.FC<StatusProps> = ({
  bgColor,
  status,
  service,
  refetch,
}) => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="uppercase">{service}</div>
      <div className="flex items-center gap-2">
        <div className="p-1 md:p-2 rounded border rounded-full">
          <div className="flex items-center gap-2">
            <p className="text-sm hidden md:block leading-4">{status}</p>
            <div className={`rounded-full w-3 h-3 md:w-4 md:h-4 ${bgColor}`} />
          </div>
        </div>
        <Button type="button" onClick={refetch}>
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default Status;
