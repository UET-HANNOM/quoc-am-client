import UploadImagePreview from "container/layout/components/UploadImagePreview";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { scanImageService } from "redux/services";
const QuickLookupScreen = () => {
  const [image, setImage] = useState();
  const [tranResult, setTranResult] = useState();
  const [err, setErr] = useState();
  const dispatch = useDispatch();
  const _onChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImage(reader.result);
    }.bind();
    console.log(url);
  };
  const scanImage = () => {
    let body = {
      image: "image",
      callback: (res, err) => {
        if (err) {
          setErr(err);
        } else {
          setTranResult(res);
          setErr("");
        }
      },
    };
    dispatch(scanImageService(body));
  };
  return (
    <div className="cs-quick-scan">
      {tranResult ? (
        <div className="cs-q-c-result">
          <div className="cs-q-c-right">
            <img src={image} alt="" />
            <label className="cs-btn ">Ảnh khác</label>
            <div className="cs-q-c-search" onClick={() => alert("dmm")}>
              <i class="fi-rr-interactive"></i>
              <p>Tra cứu</p>
            </div>
          </div>
          <i class="fi-rr-arrow-small-right"></i>
          <div className="cs-q-c-left">
            <p>{tranResult}</p>
          </div>
        </div>
      ) : (
        <>
          <div>
            <UploadImagePreview _onChange={_onChange} image={image} />
          </div>
          <h4 hidden={image}>Chọn ảnh từ thiết bị</h4>
          <button
            className="cs-q-c-btn-trans"
            hidden={!image}
            onClick={scanImage}
          >
            Dịch
          </button>
        </>
      )}
    </div>
  );
};

export default QuickLookupScreen;
