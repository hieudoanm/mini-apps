import React from 'react';

const AppContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="container mx-auto p-8">{children}</div>;
};

export default AppContainer;
