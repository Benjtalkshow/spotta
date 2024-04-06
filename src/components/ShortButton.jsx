import React from 'react';

const ShortButton = ({
  label,
  onClick,
  iconColor,
  strokeWidth,
  icon: Icon = null,
  className = 'btn',
  tailwindEffect = '',
}) => {
  return (
    <button
      className={`${className} ${tailwindEffect}`}
      onClick={onClick}
    >
      {Icon && <Icon color={iconColor} className="mr-2" strokeWidth={strokeWidth} />}
      {label}
    </button>
  );
};

export default ShortButton;