import DownloadButton from "@/app/components/DownloadButton";
import { Stage } from "react-konva";
import Konva from "konva";
import { Fragment, JSX, ReactNode, RefObject } from "react";

interface DownloadableStageProps {
  width: number;
  height: number;
  downloadable: RefObject<Konva.Node | null>;
  children: ReactNode;
}

export default function DownloadableStage(
  props: DownloadableStageProps,
): JSX.Element {
  function getDownloadDataUrl() {
    return props.downloadable?.current?.toDataURL() || "";
  }

  return (
    <Fragment>
      <div className="flex justify-end">
        <DownloadButton getDownloadDataUrl={getDownloadDataUrl} />
      </div>
      <div className="grid place-items-center h-full">
        <Stage width={props.width} height={props.height}>
          {props.children}
        </Stage>
      </div>
    </Fragment>
  );
}
