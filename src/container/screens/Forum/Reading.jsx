import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getPostById } from "redux/services";
import { Alert, AlertTitle } from "@material-ui/lab";
import moment from "moment"
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const SectionHeading = tw.h1`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const ReadingInForumScreen = () => {
  const [post, setPost] = useState();
  const [err, setErr] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      {err && (
        <Alert severity="error" style={{ margin: "3em", width: "80%" }}>
          <AlertTitle>Error</AlertTitle>
          {err}
        </Alert>
      )}
      {typeof post == "object" && (
        <ContentWithPaddingXl style={{ paddingTop: 0 }}>
          <div className="cs-fr-post cs-author-info">
            <div>
              <img src="https://source.unsplash.com/random" alt="avt" />
            </div>

            <div className="cs-fr-p-text">
              <h3>{"i.title"}</h3>
              <span>{moment(post?.date).format("LLL")}</span>
            </div>
          </div>
          <HeadingRow>
            <Heading>{post?.title}</Heading>
          </HeadingRow>
          <Text>
            <p>{post.text}</p>
          </Text>
        </ContentWithPaddingXl>
      )}
    </div>
  );
};

// const ReadingInForumScreen = React.memo(
//   ReadingInForum,
//   (prevProps, nextProps) => prevProps === nextProps
// );
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
