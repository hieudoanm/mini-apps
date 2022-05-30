import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mx-auto p-8">{children}</div>;
};

export default Container;
