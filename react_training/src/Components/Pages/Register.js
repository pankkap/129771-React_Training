import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
    name: "",
    role: "Visitor",
  });

  function createUser() {
    axios
      .post(
        "https://my-json-server.typicode.com/pankkap/myDBServer/users",
        loginDetails
      )
      .then((res) => {
        alert("User Registered");
        navigate("/login");
      });
  }
  return (
    <div>
      <h3 className="text-center text-primary my-3">Register Panel</h3>

      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control mt-1"
          onChange={(e) =>
            setloginDetails({ ...loginDetails, email: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control mt-1"
          onChange={(e) =>
            setloginDetails({ ...loginDetails, password: e.target.value })
          }
        />
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control mt-1"
            onChange={(e) =>
              setloginDetails({ ...loginDetails, name: e.target.value })
            }
          />
        </div>
      </div>
      <button className="btn btn-primary my-3" onClick={createUser}>
        Register{" "}
      </button>
    </div>
  );
}
