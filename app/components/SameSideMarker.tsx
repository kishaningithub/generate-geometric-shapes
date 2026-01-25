import { Group, Line } from "react-konva";
import React from "react";
import Point from "@/lib/geometry/Point";
import { getAngleInDegrees, midpoint } from "@/lib/geometry/utils";

interface SameSideMarkerProps {
  line: number[];
  strokeColor: string;
  doubleLine?: boolean;
  markerSize?: number;
}

export default function SameSideMarker(props: SameSideMarkerProps) {
  const markerSize = props.markerSize || 6;
  const doubleLine = props.doubleLine || false;
  const point1 = Point.fromArray(props.line.slice(0));
  const point2 = Point.fromArray(props.line.slice(2));
  const midPoint = midpoint(point1, point2);
  const rotation = getAngleInDegrees(point1, point2) + 90;
  const lineGap = 3;
  return (
    <React.Fragment>
      <Group
        rotation={rotation}
        offsetX={markerSize / 2}
        offsetY={doubleLine ? lineGap / 2 : 0}
        x={midPoint.x}
        y={midPoint.y}
      >
        <Line
          points={[
            [0, 0],
            [markerSize, 0],
          ].flat()}
          stroke={props.strokeColor}
          strokeWidth={1}
        />
        <Line
          visible={doubleLine}
          points={[
            [0, lineGap],
            [markerSize, lineGap],
          ].flat()}
          stroke={props.strokeColor}
          strokeWidth={1}
        />
      </Group>
    </React.Fragment>
  );
}
