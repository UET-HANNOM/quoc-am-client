import React, { useState } from "react";

const UploadImagePreview = () => {
  const [image, setImage] = useState();
  const _onChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
       setImage(reader.result)
     }.bind();
    console.log(url)
  }
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
