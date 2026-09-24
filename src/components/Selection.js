import React, { useState } from "react";
import '../styles/Child.css';

const Selection = ({ applyColor }) => {
    const [style, setStyle] = useState({ background: "" })
    return (
        <div className="fix-box"
            data-testid="selection-box"
            style={style}
            onClick={() => applyColor(nextStyle => setStyle(nextStyle))}
        >
            Selection
        </div>
    )
}

export default Selection;