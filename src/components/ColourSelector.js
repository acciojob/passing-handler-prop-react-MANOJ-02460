import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background, key, classname, label } = config;
  return (
    <button className={classname} 
    data-testid={key}
    onClick={() => selectNextBackground(background)}>
      {label}
    </button>
  )
}
export default ColourSelector;
