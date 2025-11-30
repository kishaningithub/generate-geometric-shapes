"use client";

import { Layer, Line } from "react-konva";
import { useState } from "react";
import Point from "@/lib/geometry/Point";
import { useForm } from "react-hook-form";
import DownloadableStage from "@/app/components/DownloadableStage";

function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

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

  const startingPoint: Point = new Point(300 - sideA / 2, 300);

  const lineA = [startingPoint.addX(sideA), startingPoint];
  const angleInRadians = (-angle * Math.PI) / 180;
  const lineB = [
    startingPoint,
    startingPoint
      .addX(sideB * Math.cos(angleInRadians))
      .addY(sideB * Math.sin(angleInRadians)),
  ];

  const sideC = distance(lineA[0], lineB[1]);

  const points = [
    ...lineA.map((p) => p.toArray()).flat(),
    ...lineB.map((p) => p.toArray()).flat(),
  ];

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
      )}
    </form>
  );
}
