import React from "react";

import FileDropzone from "../";

export default {
  title: "File Dropzone",
  component: FileDropzone,
};

const Template = (args) => <FileDropzone {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onChange: console.log,
};
