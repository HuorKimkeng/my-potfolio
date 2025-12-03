"use client";
import React, { useState, useEffect } from "react";
import "./style.css";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skill", "projects", "contactme", "location", "certificates"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="mid-header">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>

        <div className="menu">
          <nav>
            <ul className="menu-list">
              {[
                "home",
                "about",
                "certificates",
                "skill",
                "projects",
                "contactme",
                "location",
              ].map((id, index) => (
                <li key={index}>
                  <a
                    href={`#${id}`}
                    className={active === id ? "active" : ""}
                  >
                    {id === "contactme"
                      ? "Contact Me"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}