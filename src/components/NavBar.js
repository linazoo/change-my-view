import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <div id="logo" alt="Change My View">
        <a
          href="https://www.reddit.com/r/changemyview/wiki/index#wiki_what_is_.2Fr.2Fchangemyview.3F"
          target="_blank"
        >
          <Logo />
        </a>
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
