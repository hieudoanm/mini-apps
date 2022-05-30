import React from 'react';

export type StatusTemplateProps = { children: React.ReactNode };

const StatusTemplate: React.FC<StatusTemplateProps> = ({ children }) => {
  return (
    <div className="w-screen-h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-screen">
          <div
            className="w-full h-full bg-cover bg-center bg-black"
            style={{
              backgroundImage:
                'url("https://raw.githubusercontent.com/hieudoanm/mini-apps/master/packages/status/public/images/background.jpg")',
            }}
          />
        </div>
        <div className="fixed md:relative h-screen overflow-y-auto z-10 top-0 left-0 w-full">
          <div className="p-8 bg-black/50 md:bg-white text-white md:text-black">
            <div className="border rounded">
              <div className="p-4">
                <h1 className="uppercase text-center font-semibold">status</h1>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StatusTemplate.displayName = 'StatusTemplate';

export default StatusTemplate;
