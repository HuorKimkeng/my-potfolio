// import React from 'react';
import './style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function ContactMe() {
   return (
      <div className="contact-me-container">
         <div className="contact-me-cover">
            <div className="contact-left">
               <div className="contact-title">
                  <h1>Contact Me</h1>
               </div>
               <div className="contact-social">
                  <div className="contact-social-box">
                     <a href="https://www.linkedin.com/in/huor-kimkeng-b25b21279/" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon 
                           icon={faLinkedinIn}
                           style={{ width: "32px", height: "32px", color: "#fff" }} 
                        />
                     </a>
                  </div>

                  <div className="contact-social-box">
                     <a href="https://github.com/HuorKimkeng" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                           icon={faGithub}
                           style={{width: "32px", height: "32px", color: "#fff"}}
                        />
                     </a>
                  </div>

                  <div className="contact-social-box">
                     <a href="https://t.me/kimkenghuor" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                           icon={faTelegram}  
                           style={{width: "32px", height: "32px", color: "#fff"}}
                        />
                     </a>
                  </div>

                  <div className="contact-social-box">
                     <a href="https://web.facebook.com/keng.jubpiter/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                           icon={faFacebook} 
                           style={{width: "32px", height: "32px", color: "#fff"}}
                        />
                     </a>
                  </div>
               </div>
            </div>
            <div className="contact-right">
               <form className="contact-form">
                  <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                     <label htmlFor="message">Message</label>
                     <textarea id="message" name="message" rows={4} required />
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
               </form>
            </div>
         </div>
      </div>
   );
}