import React from 'react';

function Button({ children, className, ...rest }) {
  return (
    <button className={`bg-pink-500 text-white px-6 py-2 rounded-md ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
