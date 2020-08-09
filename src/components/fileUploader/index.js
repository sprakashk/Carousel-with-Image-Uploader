import React, { forwardRef } from "react";
import "./style.css";
const FileUploader = forwardRef((props, ref) => (
  <div className="fu-container">
    <input
      ref={ref}
      type="file"
      accept="image/*"
      onChange={props.uploadHandler}
      hidden
    />
    <button onClick={() => ref.current.click()}>Upload image</button>
  </div>
));

export default FileUploader;
