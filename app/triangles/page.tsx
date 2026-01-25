"use client";

import { Group, Layer, Line } from "react-konva";
import { useRef, useState } from "react";
import Point from "@/lib/geometry/Point";
import { useForm } from "react-hook-form";
import DownloadableStage from "@/app/components/DownloadableStage";
import Konva from "konva";
import { distance } from "@/lib/geometry/utils";

interface TrianglesFormInput {
  angle: number;
}

export default function TrianglesPage() {
  const {
    register,
    formState: { errors },
  } = useForm<TrianglesFormInput>({ mode: "onChange" });

  const [sideA, setSideA] = useState(120);
  const [sideB, setSideB] = useState(120);
  const [angle, setAngle] = useState(60);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [fillColor, setFillColor] = useState("#7bb2d2");
  const [strokeColor, setStrokeColor] = useState("#1f6f8b");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [drawAltitude, setDrawAltitude] = useState(false);
  const [altitudeColor, setAltitudeColor] = useState("#ff0000");
  const [altitudeWidth, setAltitudeWidth] = useState(1);
  const downloadRef = useRef<Konva.Group>(null);

  const angleInRadians = (-angle * Math.PI) / 180;
  const altitude = Math.abs(Math.sin(angleInRadians) * sideB);

  const startingPoint: Point = new Point(0, altitude);

  const lineA = [startingPoint.addX(sideA), startingPoint];

  const lineB = [
    startingPoint,
    startingPoint
      .addX(sideB * Math.cos(angleInRadians))
      .addY(sideB * Math.sin(angleInRadians)),
  ];
  const altitudeLine = [lineB[1], lineB[1].setY(startingPoint.y)];

  const sideC = distance(lineA[0], lineB[1]);

  const points = [
    ...lineA.map((p) => p.toArray()).flat(),
    ...lineB.map((p) => p.toArray()).flat(),
  ];

  const triangleWidth = Math.max(sideB, lineB[1].x);
  const triangleHeight = altitude;

  return (
    <form>
      <div className="grid">
        <label>
          Side A
          <input
            type="number"
            min="1"
            value={sideA}
            onChange={(e) => setSideA(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Side B
          <input
            type="number"
            min="1"
            value={sideB}
            onChange={(e) => setSideB(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          Angle
          <input
            type="number"
            {...register("angle", {
              min: 0,
              max: 180,
              onChange: (e) => setAngle(Number(e.currentTarget.value)),
            })}
            {...(errors.angle && { "aria-invalid": true })}
            aria-describedby="invalid-angle-helper"
            value={angle}
          />
          <small id="invalid-angle-helper">
            {errors.angle && "Value must be in range 0 to 180 (inclusive)"}
          </small>
        </label>
      </div>
      <div className="grid">
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
          Side C
          <input
            type="number"
            min="1"
            value={sideC.toFixed(3)}
            readOnly={true}
          />
        </label>
        <label>
          <div>Draw altitude</div>
          <input
            type="checkbox"
            role="switch"
            checked={drawAltitude}
            onChange={(e) => setDrawAltitude(e.currentTarget.checked)}
          />
        </label>
        <label>
          Altitude Color
          <input
            type="color"
            value={altitudeColor}
            onChange={(e) => setAltitudeColor(e.currentTarget.value)}
          />
        </label>
        <label>
          Altitude width
          <input
            type="number"
            min="1"
            value={altitudeWidth}
            onChange={(e) => setAltitudeWidth(Number(e.currentTarget.value))}
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
      {Object.keys(errors).length == 0 && (
        <DownloadableStage width={600} height={600} downloadable={downloadRef}>
          <Layer>
            <Group
              ref={downloadRef}
              x={300}
              y={300}
              offsetX={triangleWidth / 2}
              offsetY={triangleHeight / 2}
              width={triangleWidth}
              height={triangleHeight}
              rotation={rotationAngle}
            >
              <Line
                points={points}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                closed
              />
              {drawAltitude && (
                <Line
                  points={altitudeLine.map((p) => p.toArray()).flat()}
                  stroke={altitudeColor}
                  strokeWidth={altitudeWidth}
                />
              )}
            </Group>
          </Layer>
        </DownloadableStage>
      )}
    </form>
  );
}
