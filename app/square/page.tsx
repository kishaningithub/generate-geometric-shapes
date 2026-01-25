"use client";

import { Group, Layer, Rect } from "react-konva";
import { useRef, useState } from "react";
import DownloadableStage from "../components/DownloadableStage";
import Konva from "konva";
import SameSideMarker from "@/app/components/SameSideMarker";

export default function RectanglePage() {
  const [length, setLength] = useState(300);
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
          Length
          <input
            type="number"
            min="3"
            value={length}
            onChange={(e) => setLength(Number(e.currentTarget.value))}
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
          Draw Side Markers
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
            offsetX={length / 2}
            offsetY={length / 2}
            width={length}
            height={length}
            rotation={rotationAngle}
            ref={downloadRef}
          >
            <Rect
              width={length}
              height={length}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <Group visible={sameSideMarker}>
              <SameSideMarker
                strokeColor={strokeColor}
                line={[
                  [0, 0],
                  [length, 0],
                ].flat()}
              />
              <SameSideMarker
                strokeColor={strokeColor}
                line={[
                  [0, length],
                  [length, length],
                ].flat()}
              />
              <SameSideMarker
                strokeColor={strokeColor}
                line={[
                  [0, 0],
                  [0, length],
                ].flat()}
              />
              <SameSideMarker
                strokeColor={strokeColor}
                line={[
                  [length, 0],
                  [length, length],
                ].flat()}
              />
            </Group>
          </Group>
        </Layer>
      </DownloadableStage>
    </div>
  );
}
