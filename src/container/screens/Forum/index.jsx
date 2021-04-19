/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from "@material-ui/core";
import { Alert, AlertTitle, Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPostInGroup } from "redux/services";

const ForumScreen = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    let body = {
      page: page,
      callback: (res, err) => {
        if (err) {
          setErr(err);
        } else {
          setErr("");
          setPosts(res);
        }
      },
    };
    dispatch(getPostInGroup(body));
  }, [page]);
  const changePage = (event, page) => {
    setPage(page);
  };
  const loading = useSelector((state) => state.isLoading);
  const history = useHistory();
  const gotoRead = (id) => {
    history.push(`/forum/${id}`);
  };
  return (
    <div className="cs-forum">
      <h1>Diễn Đàn UET Hán - Nôm</h1>
      {err ? (
        <Alert severity="error" style={{ margin: "3em", width: "80%" }}>
          <AlertTitle>Error</AlertTitle>
          {err}
        </Alert>
      ) : loading ? (
        <CircularProgress style={{ margin: "3em" }} />
      ) : (
        <>
          <div className="cs-forum-posts">
            {posts?.item?.map((i) => (
              <div className="cs-fr-post" onClick={() => gotoRead(i._id)}>
                <div>
                  <img src="https://source.unsplash.com/random" alt="avt" />
                </div>

                <div className="cs-fr-p-text">
                  <span>{i.name}</span>
                  <h3>{i.title}</h3>
                  <p>{i.text.slice(0, 260)}...</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            count={Math.ceil(posts?.total / 10)}
            variant="outlined"
            page={page}
            shape="rounded"
            onChange={changePage}
          />
        </>
      )}
    </div>
  );
};

export default ForumScreen;
