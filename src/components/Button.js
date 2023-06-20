import React from 'react';

const Button = ({ type, value, onClick, label, className }) => {
  return (
    <button type={type} value={value} onClick={onClick} className={className} >{label}</button>
  );
};

export default Button;