import React, { useState } from "react";
import { LuEraser } from "react-icons/lu";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, clearCanvas }) => {
    // Set default values for the range inputs
    const [defaultWidth, setDefaultWidth] = useState(5); // Default brush width
    const [defaultOpacity, setDefaultOpacity] = useState(50); // Default opacity (50% as 0-100 scale)

    return (
        <div className="Menu">
            <label>Brush Color </label>
            <input
                type="color"
                onChange={(e) => {
                    setLineColor(e.target.value);
                }}
            />
            <label>Brush Width </label>
            <input
                type="range"
                min="3"
                max="20"
                value={defaultWidth} // Set default width
                onChange={(e) => {
                    setLineWidth(e.target.value);
                    setDefaultWidth(e.target.value); // Update local state
                }}
            />
            <label>Brush Opacity</label>
            <input
                type="range"
                min="1"
                max="100"
                value={defaultOpacity} // Set default opacity
                onChange={(e) => {
                    setLineOpacity(e.target.value / 100);
                    setDefaultOpacity(e.target.value); // Update local state
                }}
            />
            <label>Clear Screen</label>
            <button
                onClick={clearCanvas} // Call clearCanvas function
                className="Erase"
                title="Clear screen"
            >
                <LuEraser />
            </button>
        </div>
    );
};

export default Menu;
