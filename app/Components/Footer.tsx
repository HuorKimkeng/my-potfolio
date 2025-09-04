"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setShowButton(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <>
         <footer className="footer">
            <div className="footer-content">
               <p>
                  &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
               </p>
               <p>Designed and developed by HUOR KIMKENG.</p>
            </div>
         </footer>
         {showButton && (
            <button className="scroll-to-top-btn" onClick={scrollToTop}>
               <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ width: "32px", height: "32px", color: "#fff" }}
               />
            </button>
         )}
      </>
   );
}
