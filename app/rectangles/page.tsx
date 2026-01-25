"use client";

import { Group, Layer, Line, Rect } from "react-konva";
import { useRef, useState } from "react";
import DownloadableStage from "../components/DownloadableStage";
import Konva from "konva";
import SameSideMarker from "@/app/components/SameSideMarker";

export default function RectanglePage() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [sameSideMarker, setSameSideMarker] = useState(false);
  const downloadRef = useRef<Konva.Group>(null);

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
          <input
            type="checkbox"
            role="switch"
            checked={sameSideMarker}
            onChange={(e) => setSameSideMarker(e.currentTarget.checked)}
          />
          Draw Side Marker
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
      <DownloadableStage width={600} height={600} downloadable={downloadRef}>
        <Layer>
          <Group
            x={300}
            y={300}
            offsetX={width / 2}
            offsetY={height / 2}
            width={width}
            height={height}
            rotation={rotationAngle}
            ref={downloadRef}
          >
            <Rect
              width={width}
              height={height}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <Group visible={sameSideMarker}>
              <SameSideMarker
                strokeColor={strokeColor}
                doubleLine={true}
                rotation={90}
                x={width / 2}
                y={0}
              />
              <SameSideMarker
                strokeColor={strokeColor}
                doubleLine={true}
                rotation={90}
                x={width / 2}
                y={height}
              />
              <SameSideMarker strokeColor={strokeColor} x={0} y={height / 2} />
              <SameSideMarker
                strokeColor={strokeColor}
                x={width}
                y={height / 2}
              />
            </Group>
          </Group>
        </Layer>
      </DownloadableStage>
    </div>
  );
}
