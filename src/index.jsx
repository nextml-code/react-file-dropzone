import React, { useState } from "react";
import Label from "./components/Label";
import Wrapper from "./components/Wrapper";
import {
  handleDragEnter,
  handleDragExit,
  handleDrop,
  handleOnChange,
  preventDefault,
} from "./core/events";

const FileDropzone = ({ onChange }) => {
  const [state, setState] = useState({
    isDragging: false,
  });

  return (
    <Wrapper
      dragging={state.isDragging}
      onDragEnter={handleDragEnter(state, setState)}
      onDragExit={handleDragExit(state, setState)}
      onDragOver={preventDefault}
      onDrop={handleDrop(state, setState, onChange)}
    >
      <Label htmlFor="file-upload">
        {state.isDragging
          ? "Now is the time! Drop the files."
          : "Drag files here or click to upload"}
        <input
          type="file"
          onChange={handleOnChange(onChange)}
          id="file-upload"
          style={{ display: "none" }}
        />
      </Label>
    </Wrapper>
  );
};

export default FileDropzone;
