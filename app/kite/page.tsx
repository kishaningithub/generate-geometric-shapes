"use client";

import { Group, Layer, Line } from "react-konva";
import { useRef, useState } from "react";
import DownloadableStage from "@/app/components/DownloadableStage";
import Konva from "konva";
import SameSideMarker from "@/app/components/SameSideMarker";
import { getAngleInDegrees, midpoint } from "@/lib/geometry/utils";
import Point from "@/lib/geometry/Point";

export default function KitePage() {
  const [verticalDiagonalLength, setVerticalDiagonalLength] = useState(160);
  const [horizontalDiagonalLength, setHorizontalDiagonalLength] = useState(100);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const downloadRef = useRef<Konva.Line>(null);

  const x = verticalDiagonalLength / 2;
  const y = 0;
  const top = [x, y];
  const right = [
    x + horizontalDiagonalLength / 2,
    y + verticalDiagonalLength / 3,
  ];
  const bottom = [x, y + verticalDiagonalLength];
  const left = [
    x - horizontalDiagonalLength / 2,
    y + verticalDiagonalLength / 3,
  ];

  const points = [top, right, bottom, left].flat();

  return (
    <div>
      <div className="grid">
        <label>
          Vertical diagonal length
          <input
            type="number"
            min="1"
            value={verticalDiagonalLength}
            onChange={(e) =>
              setVerticalDiagonalLength(Number(e.currentTarget.value))
            }
          />
        </label>
        <label>
          Horizontal diagonal length
          <input
            type="number"
            min="1"
            value={horizontalDiagonalLength}
            onChange={(e) =>
              setHorizontalDiagonalLength(Number(e.currentTarget.value))
            }
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
      <DownloadableStage width={600} height={600} downloadable={downloadRef}>
        <Layer>
          <Group
            x={300}
            y={300}
            offsetX={x}
            offsetY={y + verticalDiagonalLength / 3}
            rotation={rotationAngle}
          >
            <Line
              points={points}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              ref={downloadRef}
              closed
            />
            <SameSideMarker
              strokeColor={strokeColor}
              line={[...left, ...top]}
            />
            <SameSideMarker
              strokeColor={strokeColor}
              line={[...top, ...right]}
            />
            <SameSideMarker
              strokeColor={strokeColor}
              doubleLine={true}
              line={[...left, ...bottom]}
            />
            <SameSideMarker
              strokeColor={strokeColor}
              doubleLine={true}
              line={[...bottom, ...right]}
            />
          </Group>
        </Layer>
      </DownloadableStage>
    </div>
  );
}
