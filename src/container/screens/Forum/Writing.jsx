import Editor from "container/layout/components/Editor";
import React from "react";
import { ContentWithPaddingXl } from "./Reading";

const WritingScreen = () => {
  return (
    <ContentWithPaddingXl className="cs-writing">
      <div></div>
      <div className="cs-write-head">
        <input type="text" placeholder="Tiêu đề" />
        <button disabled >Đăng</button>
      </div>
      <Editor />
    </ContentWithPaddingXl>
  );
};

export default WritingScreen;
