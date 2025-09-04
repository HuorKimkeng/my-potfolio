import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="mid-header">
        <div className="logo">
          <h1>Portfolio</h1>
          {/* <img src="/images/my-logo.jpg" alt="" /> */}
        </div>
        <div className="menu">
          <nav>
            <ul className="menu-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contactme">Contact Me</a>
              </li>
              <li>
                <a href="#location">Location</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
