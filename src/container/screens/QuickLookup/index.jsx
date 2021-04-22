import { ErrorAlert } from "container/layout/components/GenaralComponent";
import { ResultAfterScan } from "container/layout/components/GenaralComponent";
import UploadImagePreview from "container/layout/components/UploadImagePreview";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { scanImageService } from "redux/services";
const QuickLookupScreen = () => {
  const [image, setImage] = useState();
  const [tranResult, setTranResult] = useState();
  const [err, setErr] = useState();
  const [tab, setTab] = useState("1");
  const dispatch = useDispatch();
  const _onChange = (e) => {
    var file = e.target.files[0];debugger;
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
  const changeTabResult = (event, newValue) => {
    setTab(newValue);
  };
  const otherImage = () => {
    setImage(null);
    setTranResult(null);
  };
  return (
    <div className="cs-quick-scan">
      {tranResult ? (
        <div className="cs-q-c-result">
          <div className="cs-q-c-left">
            <ResultAfterScan
              data={tranResult}
              value={tab}
              handleChange={changeTabResult}
              image={image}
            />
            <button className="cs-btn " htmlFor="img" onClick={otherImage}>
              Ảnh khác
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 style={{ marginTop: "2em" }}>
            Tải lên một bức ảnh chứa ký tự Hán - Nôm
          </h2>
          <p>Chúng tôi sẽ quét bức ảnh và giúp bạn đọc nó</p>
          <div>
            <UploadImagePreview _onChange={_onChange} image={image} />
          </div>
          <h4 hidden={image}>Chọn ảnh từ thiết bị</h4>
          <button
            className="cs-q-c-btn-trans"
            hidden={!image}
            onClick={scanImage}
          >
            Quét Và Dịch
          </button>
          {err && <ErrorAlert err={err} />}
        </>
      )}
    </div>
  );
};

export default QuickLookupScreen;

