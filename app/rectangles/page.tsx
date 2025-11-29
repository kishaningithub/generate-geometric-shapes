"use client";

import { Layer, Rect, Stage, Group } from "react-konva";
import { useState } from "react";

export default function RectanglePage() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);

  return (
    <div>
      <div className="grid">
        <label>
          Width
          <input
            type="number"
            min="3"
            value={width}
            onChange={(e) => setWidth(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Height
          <input
            type="number"
            min="10"
            max="1000"
            value={height}
            onChange={(e) => setHeight(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Rotate
          <input
            type="number"
            min="-360"
            max="360"
            value={rotationAngle}
            onChange={(e) => setRotationAngle(Number(e.currentTarget.value))}
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
            <Rect
              x={300}
              y={300}
              offsetX={width / 2}
              offsetY={height / 2}
              width={width}
              height={height}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              rotation={rotationAngle}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
