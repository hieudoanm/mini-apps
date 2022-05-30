import React from 'react';

export type NavbarProps = { title: string };

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="border-b">
        <div className="container mx-auto px-8 py-4">
          <h1 className="text-2xl uppercase">{title}</h1>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
Navbar.defaultProps = { title: '' };

export default Navbar;
