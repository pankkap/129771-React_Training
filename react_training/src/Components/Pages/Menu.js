import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
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
                <Link class="nav-link text-white" to="/allposts">
                  All Posts
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/addpost">
                  Add Post
                </Link>
              </li>
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
