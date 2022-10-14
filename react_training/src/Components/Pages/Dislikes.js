import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dislikes() {
  const [posts, setposts] = useState();
  useEffect(() => {
    axios.get("http://127.0.0.1:3003/posts").then((res) => {
      let PostData = res.data;
      PostData = PostData.filter(
        (post) => post.likes == false && post.dislikes == true
      );
      setposts(PostData);
    });
  }, []);
  return (
    <div>
      <h3 className="text-center text-primary mt-3">Dislikes Posts</h3>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post, i) => (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
