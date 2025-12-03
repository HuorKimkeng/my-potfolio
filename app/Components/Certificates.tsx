"use client";

import React, { useState } from "react";
import './style.css'; 

function Certificates () {
   // Image showing function
   const [showImage, setShowImage] = useState(false);
   const [imageSrc, setImageSrc] = useState("");

   // Open modal
      const handleView = (src: string) => {
         setImageSrc(src);
         setShowImage(true);
      };

   // Close modal
   const closeModal = () => {
      setShowImage(false);
      setImageSrc("");
   };

   return (
      <div className="certificates-container">
         <div className="certificate-title">
            <h2>Certificates</h2>
         </div>

         <div className="certificate-text-desc">
            <p>
               Here are some of the certifications I’ve completed across different skill areas.
               They reflect my dedication to improving myself and staying updated with industry requirements.
            </p>
         </div>

         <div className="certificate-card">
            <div className="certificate-card-left">
               <div className="certificate-card-item">
                  <div className="title-of-certi">
                     <h2>Bachelor Degree Certificate</h2>
                  </div>

                  <div className="button-of-certi">
                     <button onClick={() => handleView("/src/pop-up/Bachelor-Degree-Certificate.jpg")}>
                        View
                     </button>
                  </div>
               </div>

               <div className="certificate-card-item">
                  <div className="title-of-certi">
                     <h2>Cisco CCNA – Introduction to Networks</h2>
                  </div>

                  <div className="button-of-certi">
                     <button onClick={() => handleView("/src/pop-up/Introduction-to-Networks.png")}>
                        View
                     </button>
                  </div>
               </div>
            </div>

            <div className="certificate-card-left">
               <div className="certificate-card-item">
                  <div className="title-of-certi">
                     <h2>CCNAv7 – Enterprise Networking, Security and Automation</h2>
                  </div>

                  <div className="button-of-certi">
                     <button onClick={() => handleView("/src/pop-up/ENSA.png")}>
                        View
                     </button>
                  </div>
               </div>

               <div className="certificate-card-item">
                  <div className="title-of-certi">
                     <h2>CCNAv7 – Switching, Routing and Wireless Essentials</h2>
                  </div>

                  <div className="button-of-certi">
                     <button onClick={() => handleView("/src/pop-up/SRWE.png")}>
                        View
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* ---------- IMAGE POPUP MODAL ---------- */}
         {showImage && (
            <div className="image-modal">
               <span className="close-btn" onClick={closeModal}>×</span>
               <img src={imageSrc} alt="Certificate" className="modal-image" />
            </div>
         )}
      </div>
   );
}

export default Certificates;