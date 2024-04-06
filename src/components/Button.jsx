import React from 'react';
import { tailwindEffect } from '../data/constants';

const Button = ({
  alt,
  label,
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      className={`${tailwindEffect}  shadow-sm flex justify-center gap-5 items-center font-semibold bg-white border-gray-300 border-[1px] hover:bg-gray-300 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full ${className}`}
      onClick={onClick}
    >
      {icon && (
        <img
          src={icon}
          alt={alt}
          width={30}
          height={30}
          className="flex-shrink-0"
        />
      )}
      <p>{label}</p>
    </button>
  );
};

export default Button;