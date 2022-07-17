import React from 'react';

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4 border-t">{children}</div>;
};

export default Item;
