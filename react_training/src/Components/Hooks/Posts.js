import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setposts] = useState();
  const [post, setpost] = useState();
  const [showEditForm, setshowEditForm] = useState(false);
  const [showCreateForm, setshowCreateForm] = useState(false);
  const [newPostRecord, setnewPostRecord] = useState({
    id: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    axios.get("http://localhost:3003/posts").then((res) => setposts(res.data));
  }, [newPostRecord, posts]);
  console.log(posts);

  function editPostDetails(postinfo) {
    setpost(postinfo);
    setshowEditForm(true);
  }

  function updateRecord() {
    console.log(newPostRecord);

    axios
      .put(`http://localhost:3003/posts/${post.id}`, newPostRecord)
      .then((res) => {
        alert("Post Updated Successfully");
        setshowEditForm(false);
      })
      .catch((err) => console.log(err.message));
  }
  console.log(post);

  function deletePostDetails(postinfo) {
    axios
      .delete(`http://localhost:3003/posts/${postinfo.id}`)
      .then(() => alert("Post Deleted Successfully"))
      .catch((err) => console.log(err.message));
  }

  function OpenNewRecordForm() {
    setshowCreateForm(true);
  }

  function createRecord() {
    axios.post(`http://localhost:3003/posts/`, newPostRecord).then((res) => {
      alert("Post Created Successfully");
      setshowCreateForm(false);
    });
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center bg-warning">
        JSON SERVER API with AXIOS Library
      </h3>
      <div className="text-center">
        <button className="btn btn-info m-3" onClick={OpenNewRecordForm}>
          Add New Record
        </button>
      </div>

      {showCreateForm ? (
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
            Add Data
          </button>
        </form>
      ) : null}

      {showEditForm ? (
        <form>
          <label htmlFor="">ID</label>
          <input
            type="text"
            className="form-control"
            defaultValue={post.id}
            onChange={(e) =>
              setnewPostRecord({ ...newPostRecord, id: e.target.value })
            }
          />
          <label htmlFor="">TITLE</label>
          <input
            type="text"
            className="form-control"
            defaultValue={post.title}
            onChange={(e) =>
              setnewPostRecord({ ...newPostRecord, title: e.target.value })
            }
          />
          <label htmlFor="">BODY</label>
          <input
            type="text"
            className="form-control"
            defaultValue={post.body}
            onChange={(e) =>
              setnewPostRecord({ ...newPostRecord, body: e.target.value })
            }
          />
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={updateRecord}
          >
            Update
          </button>
        </form>
      ) : (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th colSpan={2} className="text-center">
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
                      className="btn btn-sm btn-success"
                      onClick={() => editPostDetails(post)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deletePostDetails(post)}
                    >
                      Delete
                    </button>
                  </td>
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
      )}
    </div>
  );
}
