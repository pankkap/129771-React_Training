import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setposts] = useState();
  useEffect(() => {
    axios.get("http://127.0.0.1:3003/posts").then((res) => setposts(res.data));
  }, []);
  return (
    <div>
      <h3 className="text-primary m-3 text-center">Lists of Post</h3>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post, i) => (
              <tr key={i}>
                <td>
                  <Link to={`/posts/${post.id}`}>{post.id}</Link>
                </td>
                <td>{post.title}</td>
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
