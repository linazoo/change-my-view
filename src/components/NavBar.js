import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export function NavBar({ handleButtonClick }) {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <ul className="navlinks">
          <li>
            <Link to="/top" className="btn btn-clear top">
              Top
            </Link>
          </li>
          <li>
            <Link to="/new" className="btn btn-clear new">
              New
            </Link>
          </li>
          <li>
            <Link to="/hot" className="btn btn-clear hot">
              Hot
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
