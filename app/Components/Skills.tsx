"use client";

import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "Bootstrap", percent: 90 },
  { name: "jQuery", percent: 80 },
  { name: "PHP", percent: 80 },
  { name: "C#", percent: 85 },
  { name: "Java", percent: 80 },
  { name: "ReactJS", percent: 90 },
  { name: "NodeJS", percent: 85 },
  { name: "NextJS", percent: 85 },
  { name: "VueJS", percent: 80 },
  { name: "Dart", percent: 80 },
  { name: "Flutter", percent: 80 },
  { name: "Laravel", percent: 75 },
];

function ProgBar({ percent }: { percent: number }) {
   const barRef = useRef<HTMLDivElement>(null);
   const [inView, setInView] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => setInView(entry.isIntersecting),
         { threshold: 0.5 }
      );
      if (barRef.current) observer.observe(barRef.current);
      return () => {
         if (barRef.current) observer.unobserve(barRef.current);
      };
   }, []);

   return (
      <div
         ref={barRef}
         className={`prog-bar${inView ? " animate" : ""}`}
         style={inView ? { width: `${percent}%` } : { width: 0 }}
      ></div>
   );
}

export default function Skills() {
   const barRef = useRef<HTMLDivElement>(null);
   const [inView, setInView] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => setInView(entry.isIntersecting),
         { threshold: 0.5 }
      );
      if (barRef.current) observer.observe(barRef.current);
      return () => {
         if (barRef.current) observer.unobserve(barRef.current);
      };
   }, []);

   return (
      <div className="skills-container">
         <div className="skill-small-cover">
            <div className="skills-title">Skills</div>
            <div className="skills-describtions">
               {skills.map((skill) => (
                  <div className="prog-skill" key={skill.name}>
                  <div className="prog-name">
                     <div className="sub-prog-name">{skill.name}</div>
                     <div className="sub-prog-percentage">{skill.percent}%</div>
                  </div>
                  <div className="prog-percentage">
                     <ProgBar percent={skill.percent} />
                  </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
