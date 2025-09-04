import React from "react";
import "./style.css";

export default function AboutMe() {
  return (
    <div className="about-me-cover">
      <div className="about-me-small">
        <div className="about-me-left">
          <img src="/images/about-me-for-real.JPG" alt="" />
        </div>
        <div className="about-me-right">
          <div className="about-me">
            <div className="about-text">
              <h2>About Me</h2>
            </div>
            <p>
              Computer Science graduate (2024) from the Royal University of
              Phnom Penh with hands-on experience in HTML, CSS, JavaScript,
              jQuery, PHP, Java, C#, ReactJS, NextJS, NodeJS, Laravel, and
              databases (MySQL, SQL Server, MongoDB). I have worked on diverse
              projects across multiple industries, holding roles such as Web
              Developer, Front-End Developer, and Mobile App Developer. Skilled
              in building responsive websites, mobile applications, RESTful
              APIs, and modern UX/UI designs using Figma. Proven track record in
              delivering high-performance, user-friendly solutions across web
              and mobile platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
