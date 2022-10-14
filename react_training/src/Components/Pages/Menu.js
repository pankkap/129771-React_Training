import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Menu() {
  const [role, setrole] = useState();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let user_role = sessionStorage.getItem("role");
    setrole(user_role);
  }, [params]);

  function logout() {
    sessionStorage.removeItem("role");
    alert("User Logged Out");
    navigate("/login");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            Project
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {role ? (
                role == "Author" ? (
                  <>
                    <li class="nav-item">
                      <Link
                        class="nav-link active text-white"
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link text-white" to="/posts">
                        Posts
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link text-white" to="/addpost">
                        Add Post
                      </Link>
                    </li>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <li class="nav-item">
                      <Link
                        class="nav-link active text-white"
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link text-white" to="/posts">
                        Posts
                      </Link>
                    </li>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                )
              ) : (
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {/* <li class="nav-item">
                <Link class="nav-link text-white" to="/allposts">
                  All Posts
                </Link>
              </li> */}

              {/* <li class="nav-item">
                <Link class="nav-link text-white" to="/comp1">
                  Comp-1
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/comp2">
                  Comp-2
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
