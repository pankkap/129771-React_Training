import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  //   console.log(result);
  const [post, setpost] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3003/posts/${id}`)
      .then((res) => setpost(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-center m-3">PostDetails</h2>
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{post?.id}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{post?.title}</td>
          </tr>
          <tr>
            <th>Body</th>
            <td>{post?.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
