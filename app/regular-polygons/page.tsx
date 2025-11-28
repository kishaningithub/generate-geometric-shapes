"use client";

import { Stage, Layer, RegularPolygon } from "react-konva";
import { useState } from "react";

export default function RegularPolygons() {
  const [noOfSides, setNoOfSides] = useState(5);
  const [angle, setangle] = useState(0);
  const [radius, setRadius] = useState(100);
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");

  return (
    <div>
      <div className="grid">
        <label>
          No of sides
          <input
            type="number"
            min="3"
            value={noOfSides}
            onChange={(e) => setNoOfSides(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Rotate
          <input
            type="number"
            min="-360"
            max="360"
            value={angle}
            onChange={(e) => setangle(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Stroke Width
          <input
            type="number"
            min="0"
            max="100"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.currentTarget.value))}
          />
        </label>
      </div>
      <div className="grid">
        <label>
          Fill Color
          <input
            type="color"
            value={fillColor}
            onChange={(e) => setFillColor(e.currentTarget.value)}
          />
        </label>
        <label>
          Stroke Color
          <input
            type="color"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.currentTarget.value)}
          />
        </label>
        <label>
          Radius
          <input
            type="number"
            min="10"
            max="1000"
            value={radius}
            onChange={(e) => setRadius(Number(e.currentTarget.value))}
          />
        </label>
      </div>
      <Stage width={globalThis.innerWidth} height={globalThis.innerHeight}>
        <Layer>
          <RegularPolygon
            x={globalThis.innerWidth / 2}
            y={globalThis.innerHeight / 2}
            sides={noOfSides}
            radius={radius}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            rotation={angle}
          />
        </Layer>
      </Stage>
    </div>
  );
}
