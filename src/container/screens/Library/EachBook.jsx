import { ResultAfterScan } from "container/layout/components/GenaralComponent";
import { ContentWithPaddingXl } from "container/layout/components/GenaralComponent";
import { BookInfo } from "container/screens/Library/BookInfo";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const EachBookScreen = () => {
  const [typeView, setTypeView] = useState(true); // true is view all, false is view one
  const [shortList, setShortList] = useState(); // lưu mảng ảnh trang và id
  const sample = useSelector((state) => state.sample);
  const viewAll = () => {
    setTypeView(true);
  };
  const viewOne = () => {
    setTypeView(false);
  };
  return (
    <ContentWithPaddingXl className="cs-eachbook">
      <div className="cs-eb-desc">
        {typeView && <BookInfo viewAll={viewAll} viewOne={viewOne} />}
      </div>

      {!typeView ? (
        <OnePageView data={sample} />
      ) : shortList ? (
        <div className="cs-eb-list-page">
          {arr.map((i) => (
            <div>
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          ))}
        </div>
      ) : null}
      <h2>Bình Luận</h2>
      {/* {post?.comments.map((i) => ( */}
      <div>
        <div className="cs-fr-list-cmt">
          <img src="https://source.unsplash.com/random" alt="avt" />
          <div>
            <h4>{"i.name"}</h4>
            <span>{`moment(post?.comments?.date).format("LLL")`}</span>
          </div>
        </div>
        <p>{`i.text`}</p>
        <hr />
      </div>
      {/* ))} */}
      <div className="cs-fr-writing-cmt">
        {/* {!isAuth ? (
                <button
                  onClick={() =>
                    history.push("/auth/sign-in/607c5784bb96af126482be07")
                  }
                >
                  Đăng nhập để viết bình luận
                </button>
              ) : ( */}
        <div>
          <div className="cs-fr-post">
            <div>
              <img src="https://source.unsplash.com/random" alt="avt" />
            </div>
            <div className="cs-fr-p-text">
              <h3>{"i.title"}</h3>
            </div>
            <button onClick={`postCmt`} disabled={`cmt === ""`}>
              Đăng
            </button>
          </div>
          <TextareaAutosize
            name="write-cmt"
            onChange={`writeCmt`}
            value={`cmt`}
            placeholder="Viết bình luận"
          ></TextareaAutosize>
        </div>
      </div>
      {/* )} */}
    </ContentWithPaddingXl>
  );
};

export default EachBookScreen;
const OnePageView = ({ data }) => {
  return (
    <div>
      <h3>Tác Giả</h3>
      <h1>Tiêu đề</h1>
      <div className="cs-eb-one-page">
        <div>
          <i class="fi-rr-angle-double-small-left"></i>
        </div>
        <ResultAfterScan data={data} value="1" csclass="cs-tab-view" />
        <div>
          <i class="fi-rr-angle-double-small-right"></i>
        </div>
      </div>
    </div>
  );
};
