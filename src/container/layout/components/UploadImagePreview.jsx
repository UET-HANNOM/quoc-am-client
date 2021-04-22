import React from "react";

const UploadImagePreview = ({image, _onChange}) => {
 
  return (
    <div className={`cs-upload-image-preview ${image ? "cs-preview" : ""}`}>
      <label htmlFor="img" className="cs-upload-icon">
        <i class="fi-rr-download"></i>
      </label>
      <input type="file" name="img" id="img" hidden onChange={_onChange}/>
     {image && <img src={image} alt=""/>}
    </div>
  );
};

export default UploadImagePreview;
