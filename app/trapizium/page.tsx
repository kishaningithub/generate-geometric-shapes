"use client";

import { Layer, Line } from "react-konva";
import { useRef, useState } from "react";
import DownloadableStage from "@/app/components/DownloadableStage";
import Konva from "konva";

export default function TrapeziumPage() {
  const [topWidth, setTopWidth] = useState(120);
  const [bottomWidth, setBottomWidth] = useState(200);
  const [offset, setOffset] = useState(40);
  const [height, setHeight] = useState(100);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const downloadRef = useRef<Konva.Line>(null);

  const x = 300 - bottomWidth / 2;
  const y = 300 - height / 2;

  const points = [
    x + offset,
    y, // top-left
    x + offset + topWidth,
    y, // top-right
    x + bottomWidth,
    y + height, // bottom-right
    x,
    y + height, // bottom-left
  ];

  return (
    <div>
      <div className="grid">
        <label>
          Top width
          <input
            type="number"
            min="1"
            value={topWidth}
            onChange={(e) => setTopWidth(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Bottom width
          <input
            type="number"
            min="1"
            value={bottomWidth}
            onChange={(e) => setBottomWidth(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Offset
          <input
            type="number"
            min="1"
            value={offset}
            onChange={(e) => setOffset(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Height
          <input
            type="number"
            min="1"
            value={height}
            onChange={(e) => setHeight(Number(e.currentTarget.value))}
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
          <Line
            points={points}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            ref={downloadRef}
            closed
          />
        </Layer>
      </DownloadableStage>
    </div>
  );
}
