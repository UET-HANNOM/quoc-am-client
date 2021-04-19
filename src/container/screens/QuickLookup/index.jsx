import UploadImagePreview from "container/layout/components/UploadImagePreview";
import React from "react";

const QuickLookupScreen = () => {
  return (
    <div className="cs-quick-scan">
      <div>
        <UploadImagePreview />
      </div>
      <button className="cs-q-c-btn-trans">Dịch</button>
      <div className="cs-q-c-result">
        <div className="cs-q-c-right">
          <img src="https://source.unsplash.com/random" alt="" />
          <label className="cs-btn ">Ảnh khác</label>
          <div className="cs-q-c-search" onClick={() => alert("dmm")}>
            <i class="fi-rr-interactive"></i>
            <p>Tra cứu</p>
          </div>
        </div>
        <i class="fi-rr-arrow-small-right"></i>
        <div className="cs-q-c-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            illo. Odit sapiente nemo unde dolore esse maxime, iste ut
            repudiandae ratione magni facere harum? Saepe corporis dolorem
            veniam laudantium commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Reiciendis iure necessitatibus eveniet odio enim
            facilis eius? Atque, doloremque. Unde aperiam voluptatum fugiat
            corporis numquam soluta sapiente amet similique eveniet distinctio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatum consectetur nisi natus, debitis porro modi ab, deleniti
            sunt assumenda asperiores repellat hic! Incidunt quod dolorum
            inventore quis magni voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio dicta repellendus porro
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickLookupScreen;
