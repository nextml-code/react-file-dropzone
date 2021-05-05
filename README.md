# @aiwizo/react-file-dropzone

**NOTE! v0.0.x - alpha. Not production ready. Still needs testing and improvements.**

File dropzone component for React.

## Installation

```
npm install @aiwizo/react-file-dropzone @aiwizo/application-styles
```

## Basic Usage

```javascript
// Importing
import "@aiwizo/application-styles";
import FileDropzone from "@aiwizo/react-file-dropzone";

<FileUpload
  onChange={({ event, files }) => {
    /* Do something */
  }}
/>;
```

Make sure that the peer dependencies in `package.json` are installed in your application.

## Contribution

Please let us know if you have any issues. Put an issue here on github and we'll do our best to solve it.
