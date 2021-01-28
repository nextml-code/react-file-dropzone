import React from "react";

import FileDropzone from "../";

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
};
