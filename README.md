# @aiwizo/react-file-dropzone

**NOTE! v0.0.x - alpha. Not production ready. Still needs testing and improvements.**

File dropzone component for React.

## Installation

```
npm install @aiwizo/react-file-dropzone
```

## Basic Usage

```javascript
// Importing
import FileDropzone from "@aiwizo/react-file-dropzone";
```

```javascript
<FileUpload
  onChange={({ event, files }) => {
    /* Do something */
  }}
/>
```

Make sure that the peer dependencies in `package.json` are installed in your application.

## Styling

At the moment styling is depending on these stylesheets from [application-styles](https://github.com/Aiwizo/application-styles)

```html
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/reset.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/fonts.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/animations.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/colors.css"
  rel="stylesheet"
/>
```

Custom styling may or may not be a feature in the future.

## Contribution

Please let us know if you have any issues. Put an issue here on github and we'll do our best to solve it.
