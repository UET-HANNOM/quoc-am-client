import React, { useState } from "react";
import { useHistory } from "react-router";
import sm from './LienPhai-2502.jpg'
const LibraryScreen = () => {
  const [showInfoId, setShowInfoId] = useState(null);
  const showInfo = (id) => {
    if (showInfoId !== id) {
      setShowInfoId(id);
    } else {
      setShowInfoId(null);
    }
  };
  const history = useHistory()
  const goto = (id) => {
    history.push(`/library/${id}`)
  }
  return (
    <div className="cs-library">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div className="cs-library-card" onClick={() => goto(i)}>
          <div className="cs-l-c-img">
            <img src={sm} alt="" />
            <i
              class={showInfoId === i ? "fi-rr-cross-circle" : "fi-rr-info"}
              onClick={() => showInfo(i)}
            ></i>
            <p id="cs-library-card-info" hidden={showInfoId !== i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              error vitae doloribus eum repudiandae eligendi, illum magni nobis
              asperiores est suscipit ea, ut dolor iure repellendus officiis id
              velit nisi!
            </p>
          </div>
          <div className="cs-l-c-title">
            <p>Tiêu đề: Lorem, ipsum dolor sit amet consectetur adipisicing</p>
            <p>
              Tác giả: Velit dolore in 
            </p>
          </div>
          <button>Xem thêm</button>
        </div>
      ))}
    </div>
  );
};

export default LibraryScreen;
