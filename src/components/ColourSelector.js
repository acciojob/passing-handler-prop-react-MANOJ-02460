import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, key, classname, label } = config;

  return (
    <button
      className={classname}
      data-testid={key}               // Added data-testid for Cypress
      onClick={() => selectNextBackground(background)}
    >
      {label}
    </button>
  )
}

export default ColourSelector;