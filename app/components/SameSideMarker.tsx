import { Group, Line } from "react-konva";
import React from "react";

interface SameSideMarkerProps {
  markerSize?: number;
  strokeColor: string;
  rotation?: number;
  doubleLine?: boolean;
  x: number;
  y: number;
}

export default function SameSideMarker(props: SameSideMarkerProps) {
  const markerSize = props.markerSize || 6;
  const doubleLine = props.doubleLine || false;
  const rotation = props.rotation || 0;
  const lineGap = 3;
  return (
    <React.Fragment>
      <Group
        rotation={rotation}
        offsetX={markerSize / 2}
        offsetY={doubleLine ? lineGap / 2 : 0}
        x={props.x}
        y={props.y}
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
