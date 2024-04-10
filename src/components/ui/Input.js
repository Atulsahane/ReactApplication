import React from 'react';

function Input({ className, ...rest }) {
  return <input className={`border text-sm rounded-md w-full p-2 ${className}`} {...rest} />;
}

export default Input;
