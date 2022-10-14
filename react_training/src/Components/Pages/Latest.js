import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Latest() {
  const [posts, setposts] = useState();

  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    axios.get("http://127.0.0.1:3003/posts").then((res) => {
      let PostData = res.data;
      PostData = PostData.filter(
        (post) => post.latest == true && post.oldest == false
      );
      setposts(PostData);
    });
  }
  function likePost(post) {
    post.latest = false;
    post.oldest = true;
    post.likes = true;
    axios.put(`http://127.0.0.1:3003/posts/${post.id}`, post).then(() => {
      getPost();
    });
  }

  function dislikePost(post) {
    post.latest = false;
    post.oldest = true;
    post.dislikes = true;

    axios.put(`http://127.0.0.1:3003/posts/${post.id}`, post).then(() => {
      getPost();
    });
  }
  return (
    <div>
      <h3 className="text-center text-primary m-3">Latest Posts</h3>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th colSpan={2} className="text-center" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post, i) => (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info mx-3"
                    onClick={() => likePost(post)}
                  >
                    Like
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning mx-3"
                    onClick={() => dislikePost(post)}
                  >
                    Dislike
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center">
                <span className="h4 text-danger ">No Data Available</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
