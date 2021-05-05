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

const defaultStyles = {
  fontFamily: "var(--aiwizo-application-default-font)",
  fontWeight: 900,
  color: "var(--aiwizo-application-black)",
  colorDragging: "var(--aiwizo-application-white)",
  backgroundColor: "var(--aiwizo-application-light-background-blue)",
  backgroundColorDragging: "var(--aiwizo-application-blue)",
  fontSize: "var(--aiwizo-application-font-size-big)",
  border: "1px solid var(--aiwizo-application-primary-border-blue)",
  borderTopLeftRadius: "var(--aiwizo-application-border-radius-primary)",
  borderTopRightRadius: "var(--aiwizo-application-border-radius-primary)",
  borderBottomRightRadius: "var(--aiwizo-application-border-radius-primary)",
  borderBottomLeftRadius: "var(--aiwizo-application-border-radius-primary)",
  padding: "var(--aiwizo-application-spacing-medium)",
};

const FileDropzone = ({ onChange, passiveText, activeText, styles = {} }) => {
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

export default FileDropzone;
