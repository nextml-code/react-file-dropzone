import React from "react";

import "@aiwizo/application-styles";
import { FileDropzone } from "../";

export default {
  title: "File Dropzone",
  component: FileDropzone,
};

const Template = (args) => <FileDropzone {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  onChange: console.log,
};

Secondary.args = {
  onChange: console.log,
  passiveText: "Hello",
  activeText: "World",
  styles: {
    border: "2px dashed red",
    fontWeight: 300,
    backgroundColorDragging: "green",
  },
};
