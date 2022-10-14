import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dislikes from "./Dislikes";
import Latest from "./Latest";
import Likes from "./Likes";
import Oldest from "./Oldest";

export default function Posts() {
  return (
    <div className="mt-5">
      <ul class="nav justify-content-center bg-dark text-light">
        <li class="nav-item">
          <Link
            class="nav-link active text-white"
            aria-current="page"
            to="latest"
          >
            LATEST
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="oldest">
            OLDEST
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="likes">
            LIKES
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="dislikes">
            DISLIKES
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/latest" element={<Latest />} />
        <Route path="/oldest" element={<Oldest />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/dislikes" element={<Dislikes />} />
      </Routes>
    </div>
  );
}
