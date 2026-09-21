import React, { useState } from 'react';
import "../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      data-testid="selection-box"   // Added data-testid to help tests locate boxes
      style={style}
      onClick={() => applyColor(setStyle)}
    >
      Selection
    </div>
  )
}

export default Selection;