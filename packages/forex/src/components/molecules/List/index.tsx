import React from 'react';
import Header from './Header';
import Item from './Item';

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border rounded">{children}</div>;
};

export default Object.assign(List, { Header, Item });
