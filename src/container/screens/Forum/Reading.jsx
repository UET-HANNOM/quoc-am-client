import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, postComment } from "redux/services";
import { Alert, AlertTitle } from "@material-ui/lab";
import moment from "moment";
import TextareaAutosize from "react-textarea-autosize";
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const SectionHeading = tw.h1`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const ReadingInForumScreen = () => {
  const [post, setPost] = useState();
  const [err, setErr] = useState("");
  const [cmt, setCmt] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const getPost = () => {
    let body = {
      id: id,
      callback: (res, err) => {
        if (err) {
          setErr(err);
        } else {
          setPost(res);
          setErr("");
        }
      },
    };
    dispatch(getPostById(body));
  };
  const history = useHistory();
  const isAuth = useSelector((state) => state.isAuth);
  const writeCmt = (event) => {
    setCmt(() => event.target.value);
  };
  const postCmt = () => {
    let body = {
      id: id,
      text: cmt,
      callback: (res, err) => {
        setCmt("");
        if (err) {
          setErr(err);
        } else {
          setPost({
            ...post,
            comments: res,
          });
          setErr("");
        }
      },
    };
    dispatch(postComment(body));
  };
  return (
    <div>
      {err && (
        <Alert severity="error" style={{ margin: "3em", width: "80%" }}>
          <AlertTitle>Error</AlertTitle>
          {err}
        </Alert>
      )}
      <button
        className="cs-btn cs-fr-btn"
        onClick={() => history.push("/writing")}
      >
        Viết bài
        <i class="fi-rr-pencil"></i>
      </button>
      {typeof post == "object" && (
        <>
          <ContentWithPaddingXl className="cs-fr-main-contain">
            <div className="cs-fr-post cs-author-info">
              <div>
                <img src="https://source.unsplash.com/random" alt="avt" />
              </div>

              <div className="cs-fr-p-text">
                <h3>{post?.name}</h3>
                <span>{moment(post?.date).format("LLL")}</span>
              </div>
            </div>
            <HeadingRow>
              <Heading>{post?.title}</Heading>
              <div className="cs-fr-p-react">
                <i class="fi-rr-thumbs-up"></i>
                <span>{post?.likes.length}</span>
              </div>
              <div className="cs-fr-p-react">
                <i class="fi-rr-comment-alt"></i>
                <span>{post?.comments.length}</span>
              </div>
            </HeadingRow>
            <Text>
              <p>{post.text}</p>
            </Text>
          </ContentWithPaddingXl>

          <ContentWithPaddingXl className="cs-fr-comment">
            <h2>Bình Luận</h2>
            {post?.comments.map((i) => (
              <div>
                <div className="cs-fr-list-cmt">
                  <img src="https://source.unsplash.com/random" alt="avt" />
                  <div>
                    <h4>{i.name}</h4>
                    <span>{moment(post?.comments?.date).format("LLL")}</span>
                  </div>
                </div>
                <p>{i.text}</p>
                <hr />
              </div>
            ))}
            <div className="cs-fr-writing-cmt">
              {!isAuth ? (
                <button
                  onClick={() =>
                    history.push("/auth/sign-in/607c5784bb96af126482be07")
                  }
                >
                  Đăng nhập để viết bình luận
                </button>
              ) : (
                <div>
                  <div className="cs-fr-post">
                    <div>
                      <img src="https://source.unsplash.com/random" alt="avt" />
                    </div>
                    <div className="cs-fr-p-text">
                      <h3>{"i.title"}</h3>
                    </div>
                    <button onClick={postCmt} disabled={cmt === ""}>
                      Đăng
                    </button>
                  </div>
                  <TextareaAutosize
                    name="write-cmt"
                    onChange={writeCmt}
                    value={cmt}
                    placeholder="Viết bình luận"
                  ></TextareaAutosize>
                </div>
              )}
            </div>
          </ContentWithPaddingXl>
        </>
      )}
    </div>
  );
};

export default ReadingInForumScreen;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
