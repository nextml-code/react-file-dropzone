import React, { useState } from "react";
import { Label } from "./components/Label";
import { Wrapper, defaultStyles } from "./components/Wrapper";
import {
  handleDragEnter,
  handleDragExit,
  handleDrop,
  handleOnChange,
  preventDefault,
} from "./core/events";

export const FileDropzone = ({
  onChange,
  passiveText,
  activeText,
  styles = {},
}) => {
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
      styles={{
        ...defaultStyles,
        ...styles,
      }}
    >
      <Label
        htmlFor="file-upload"
        styles={{
          ...defaultStyles,
          ...styles,
        }}
      >
        {state.isDragging
          ? activeText || "Now is the time! Drop the files."
          : passiveText || "Drop files here or click to browse"}
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
