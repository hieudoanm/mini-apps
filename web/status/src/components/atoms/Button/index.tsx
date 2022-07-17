import React from 'react';

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
  children: string;
};

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded bg-red-500 text-white px-2 py-1 text-sm"
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
