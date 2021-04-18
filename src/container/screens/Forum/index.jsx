import { CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  return (
    <div className="cs-forum">
      <h1>Diễn Đàn UET Hán - Nôm</h1>
      {loading ? (
        <CircularProgress style={{margin: "3em"}}/>
      ) : (
        <>
          <div className="cs-forum-posts">
            {posts?.item?.map((i) => (
              <div className="cs-fr-post">
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
            count={Math.ceil(posts?.total / 5)}
            variant="outlined"
            shape="rounded"
            onChange={changePage}
          />
        </>
      )}
    </div>
  );
};

export default ForumScreen;
