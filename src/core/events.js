import { map } from "./functional";

export const handleDragEnter = (state, setState) => (event) => {
  event.preventDefault();
  setState({
    ...state,
    isDragging: true,
  });
};

export const handleDragExit = (state, setState) => (event) => {
  event.preventDefault();
  setState({
    ...state,
    isDragging: false,
  });
};

export const getFileList = (dataTransfer) => {
  if (dataTransfer.items) {
    return map([...dataTransfer.items], (file) => {
      if (file.kind === "file") {
        return file.getAsFile();
      }
    });
  } else {
    return map([...dataTransfer.files], identity);
  }
};

export const handleDrop = (state, setState, onChange) => (event) => {
  event.preventDefault();
  setState({
    ...state,
    isDragging: false,
  });

  onChange({ event, files: getFileList(event.dataTransfer) });
};

export const preventDefault = (event) => event.preventDefault();

export const handleOnChange = (onChange) => (event) => {
  event.preventDefault();
  const {
    target: { files },
  } = event;
  onChange({ event, files });
};
