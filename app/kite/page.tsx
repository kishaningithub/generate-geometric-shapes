"use client";

import { Layer, Line } from "react-konva";
import { useState } from "react";
import DownloadableStage from "@/app/components/DownloadableStage";

export default function KitePage() {
  const [verticalDiagonalLength, setVerticalDiagonalLength] = useState(160);
  const [horizontalDiagonalLength, setHorizontalDiagonalLength] = useState(100);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);

  const x = 300 - verticalDiagonalLength / 2;
  const y = 300 - horizontalDiagonalLength / 2;

  const points = [
    [x, y], // top
    [x + horizontalDiagonalLength / 2, y + verticalDiagonalLength / 3], // right
    [x, y + verticalDiagonalLength], // bottom
    [x - horizontalDiagonalLength / 2, y + verticalDiagonalLength / 3], // left
  ].flat();

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
      <DownloadableStage width={600} height={600}>
        <Layer>
          <Line
            points={points}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            closed
          />
        </Layer>
      </DownloadableStage>
    </div>
  );
}
