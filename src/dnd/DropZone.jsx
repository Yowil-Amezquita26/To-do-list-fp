import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import dropCard from "./dropCard";

function DropZone({ children, newData, refresh }) {
  let currentContainer = useRef();
  let zone = "";
  const [{ isOverCurrent }, drop] = useDrop(() => ({
    accept: "card",
    collect: (monitor) => ({
      isOverCurrent: monitor.didDrop(),
      dropSource: monitor.getDropResult(),
    }),
    drop: (item) => {
      zone = currentContainer.current.children[0].id;
      dropCard(item, zone);
      refresh(true);
    },
  }));
  const handleDropped = (e) => {};
  return (
    <>
      <div onMouseEnter={handleDropped()} ref={currentContainer}>
        <div ref={drop} id={`${children.key}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default DropZone;
