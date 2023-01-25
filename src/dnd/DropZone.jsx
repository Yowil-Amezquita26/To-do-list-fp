import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import dropCard from "./dropCard";

function DropZone({ children }) {
  let currentContainer = useRef();
  let zone = ""
  const [{ isOver, isOverCurrent, dropOver }, drop] = useDrop(() => ({
    accept: "card",
    collect: (monitor) => ({
      isOverCurrent: monitor.didDrop(),
      dropSource: monitor.getDropResult(), 
    }),
    drop: (item) => {
      zone=currentContainer.current.children[0].id
      dropCard(item, zone);
      // console.log(currentContainer.current.children[0].id);
      // console.log(currentContainer.current.children);
    },
  }));
const handleDropped = (e) =>{
}
  console.log();
  return (
    <>
      <div onMouseEnter={handleDropped()} ref={currentContainer}>
        <div ref={drop} id={`${children.key}`}>{children}</div>
      </div>
    </>
  );
}

export default DropZone;
