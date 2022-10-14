import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginDetails, setloginDetails] = useState({
    username: "",
    password: "",
  });

  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/pankkap/myDBServer/users")
      .then((res) => setusers(res.data));
  }, []);
  console.log(users);
  function loginProcess() {
    // console.log(loginDetails);

    let foundUser = users.find((u) => u.email === loginDetails.username);

    if (foundUser.password === loginDetails.password) {
      if (foundUser.role === "Author") {
        sessionStorage.setItem("role", "Author");
        // console.log("Role Added inside SessionStorage");
        navigate("/home");
      } else {
        sessionStorage.setItem("role", "Visitor");
        // console.log("Role Added inside SessionStorage");
        navigate("/home");
      }
    } else {
      alert("Password not matched");
    }
  }
  function registerPage() {
    navigate("/register");
  }
  return (
    <div>
      <h3 className="text-center text-primary my-3">Login Panel</h3>

      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control mt-1"
          onChange={(e) =>
            setloginDetails({ ...loginDetails, username: e.target.value })
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
      </div>
      <button className="btn btn-primary my-3" onClick={loginProcess}>
        Login{" "}
      </button>
      <button className="btn btn-warning m-3" onClick={registerPage}>
        Ragister{" "}
      </button>
    </div>
  );
}
