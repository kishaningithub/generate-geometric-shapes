"use client";

import { Circle, Layer, Stage } from "react-konva";
import { useState } from "react";

export default function CirclePage() {
  const [radius, setRadius] = useState(120);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);

  return (
    <div>
      <div className="grid">
        <label>
          Radius
          <input
            type="number"
            min="3"
            value={radius}
            onChange={(e) => setRadius(Number(e.currentTarget.value))}
          />
        </label>
      </div>
      <div className="grid">
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
      </div>
      <div className="grid place-items-center h-full">
        <Stage width={600} height={600}>
          <Layer>
            <Circle
              x={300}
              y={300}
              radius={radius}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
