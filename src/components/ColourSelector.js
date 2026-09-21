import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={config.classname} onClick={() => { console.log("Button background:", background);selectNextBackground({background: background})}}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
