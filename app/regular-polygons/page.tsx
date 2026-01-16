"use client";

import { Layer, RegularPolygon } from "react-konva";
import { useRef, useState } from "react";
import DownloadableStage from "../components/DownloadableStage";
import Konva from "konva";

export default function RegularPolygonPage() {
  const [noOfSides, setNoOfSides] = useState(5);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [radius, setRadius] = useState(120);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const downloadRef = useRef<Konva.RegularPolygon>(null);

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
            value={rotationAngle}
            onChange={(e) => setRotationAngle(Number(e.currentTarget.value))}
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
      <DownloadableStage width={600} height={600} downloadable={downloadRef}>
        <Layer>
          <RegularPolygon
            x={300}
            y={300}
            sides={noOfSides}
            radius={radius}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            rotation={rotationAngle}
            ref={downloadRef}
          />
        </Layer>
      </DownloadableStage>
    </div>
  );
}
