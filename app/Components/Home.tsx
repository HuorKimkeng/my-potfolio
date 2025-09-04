"use client"; 
import React, { useEffect, useState } from 'react';
import './style.css'; 

export default function Home() {
   const text = "Full Stack Developer";
   const [displayed, setDisplayed] = useState("");
   const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
      let timeout: NodeJS.Timeout;
      if (!isDeleting && displayed.length < text.length) {
         timeout = setTimeout(() => {
         setDisplayed(text.slice(0, displayed.length + 1));
         }, 80);
      } else if (!isDeleting && displayed.length === text.length) {
         timeout = setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayed.length > 0) {
         timeout = setTimeout(() => {
         setDisplayed(text.slice(0, displayed.length - 1));
         }, 50);
      } else if (isDeleting && displayed.length === 0) {
         timeout = setTimeout(() => setIsDeleting(false), 500);
      }
      return () => clearTimeout(timeout);
   }, [displayed, isDeleting, text]);

   return (
      <div className="home-cover">
         <div className="home-small">
            <div className="home-left">
               <div className="hi-text">
                  Hello, I'm
               </div>
               <div className="name-text">
                  HUOR KIMKENG
               </div>
               <div className="position">
                  {displayed.split("").map((char, idx) => (
                     <span className="fade-in-letter animated-text" key={idx}>
                        {char === " " ? "\u00A0" : char}
                     </span>
                  ))}
               </div>
               <div className="describtion">
                  <p>
                     I have hands-on experience building and delivering dynamic, 
                     user-friendly, and scalable web applications. My work spans 
                     both front-end and back-end development, utilizing a diverse 
                     set of technologies including HTML, CSS, JavaScript, jQuery, 
                     PHP, Java, and C#. I also specialize in modern frameworks and 
                     tools such as ReactJS, NextJS, NodeJS, and Laravel, and work with 
                     databases like MongoDB, MySQL, and SQL Server. Additionally, 
                     I am proficient with Postman for API testing and integration. 
                     My approach combines clean, maintainable code with a focus on 
                     performance, security, and an excellent user experience.
                  </p>
               </div>
            </div>
            <div className="home-right">
               <div className="my-photo">
                  <img src="/images/my-photo.jpg" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}