import React from "react";
import Logo from "./Logo";

export function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <ul className="navlinks">
          <li>
            <button className="btn btn-clear top">Top</button>
          </li>
          <li>
            <button className="btn btn-clear new">New</button>
          </li>
          <li>
            <button className="btn btn-clear hot">Hot</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
