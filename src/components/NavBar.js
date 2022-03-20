import React from "react";

export function NavBar() {
  return (
    <nav className="flex">
      <div className="logo"></div>
      <div className="links">
        <ul className="navlinks">
          <li>
            <button className="btn top">Top</button>
          </li>
          <li>
            <button className="btn new">New</button>
          </li>
          <li>
            <button className="btn hot">Hot</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
