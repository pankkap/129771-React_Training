import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const navigate = useNavigate();
  const [newPostRecord, setnewPostRecord] = useState({
    title: "",
    body: "",
    latest: true,
    oldest: false,
    likes: false,
    dislikes: false,
  });
  function createRecord() {
    axios
      .post(
        `https://my-json-server.typicode.com/pankkap/myDBServer/posts`,
        newPostRecord
      )
      .then((res) => {
        alert("Post Created Successfully");
        navigate("/posts/latest");
      });
  }
  return (
    <div>
      <h3 className="text-center text-primary my-3">Add New Post</h3>
      <form>
        <label htmlFor="">TITLE</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            setnewPostRecord({ ...newPostRecord, title: e.target.value })
          }
        />
        <label htmlFor="">BODY</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            setnewPostRecord({ ...newPostRecord, body: e.target.value })
          }
        />
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={createRecord}
        >
          Add Record
        </button>
      </form>
    </div>
  );
}
