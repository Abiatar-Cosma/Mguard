import React from 'react';

const Icon = ({ name, className = '', size = 24 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <use xlinkHref={`/icons/symbol-defs.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;