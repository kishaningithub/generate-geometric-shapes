import DownloadButton from "@/app/components/DownloadButton";
import { Stage } from "react-konva";
import Konva from "konva";
import { Fragment, JSX, ReactNode, useRef } from "react";

interface DownloadableStageProps {
  width: number;
  height: number;
  children: ReactNode;
}

export default function DownloadableStage(
  props: DownloadableStageProps,
): JSX.Element {
  const stageRef = useRef<Konva.Stage>(null);

  function getDownloadDataUrl() {
    return stageRef.current?.toDataURL() || "";
  }

  return (
    <Fragment>
      <div className="flex justify-end">
        <DownloadButton getDownloadDataUrl={getDownloadDataUrl} />
      </div>
      <div className="grid place-items-center h-full">
        <Stage width={props.width} height={props.height} ref={stageRef}>
          {props.children}
        </Stage>
      </div>
    </Fragment>
  );
}
