"use client";

import React, { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState("uxui");

   return (
      <div className="projects-container">
         <div className="project-small">
         <div className="project-title">
            <h1>Projects</h1>
         </div>

         <div className="project-describtion-text">
            <p>
               I specialize in crafting <b>UX/UI designs</b>, <b>websites</b>, and{" "}
               <b>mobile applications </b>
               that combine visual appeal with functionality. My projects range
               from building responsive, high-performance websites to designing
               intuitive user interfaces and developing mobile apps for Android and
               iOS. I focus on delivering solutions that are not only aesthetically
               pleasing but also optimized for user experience and business goals.
            </p>
         </div>

            <div className="project-card-cover">
               <div className="select-button">
                  <div className="glass-radio-group">
                     <input
                        type="radio"
                        name="plan"
                        id="glass-silver"
                        // defaultChecked
                        checked={selected === "uxui"}
                        onChange={() => setSelected("uxui")}
                     />
                     <label htmlFor="glass-silver">UX/UI</label>

                     <input
                        type="radio"
                        name="plan"
                        id="glass-gold"
                        checked={selected === "website"}
                        onChange={() => setSelected("website")}
                     />
                     <label htmlFor="glass-gold">Website</label>

                     <input
                        type="radio"
                        name="plan"
                        id="glass-platinum"
                        checked={selected === "app"}
                        onChange={() => setSelected("app")}
                     />
                     <label htmlFor="glass-platinum">App</label>
                     <div className="glass-glider" />
                  </div>
               </div>
               <div className="project-card">
                  {selected === "uxui" && (
                     <div className="ui-card">
                        <div className="ui-card-one">
                           <a href="https://www.figma.com/design/VafISqRDP2VFkOfcSwopi0/Tea-Shop?node-id=1-2&t=GNftmvXCyleecW0R-0" target="_blank" rel="noopener noreferrer">
                              <div className="project-images">
                                 <img src="/images/ux-ui-coffee-shop.png" alt="" />
                              </div>
                           </a>
                           {/* <div className="project-images">
                              <img src="/images/ux-ui-coffee-shop.png" alt="" />
                           </div> */}
                           <div className="project-text">
                              <h2>UX/UI Design</h2>
                              <p>A coffee shop app designed.</p>
                           </div>
                        </div>
                     </div>
                  )}
                  {selected === "website" && (
                     <div className="ui-card">
                        <div className="ui-card-one">
                           <a href="">
                              <div className="project-images">
                                 <img src="/images/portfolio-web.png" alt="" />
                              </div>
                           </a>

                           <div className="project-text">
                              <h2>Website</h2>
                              <p>A portfolio website.</p>
                           </div>
                        </div>

                        {/* <div className="ui-card-one"></div> */}

                        {/* <div className="ui-card-one"></div> */}
                     </div>
                  )}
                  {selected === "app" && (
                     <div className="ui-card">
                        <div className="app-card-one">
                           <div className="app-card-images">
                              <img src="/images/color-sort.jpg" alt="" />
                           </div>
                           <div className="app-card-text">
                              <h2>App</h2>
                              <p>Color sorting</p>
                           </div>
                        </div>

                        <div className="app-card-one">
                           <div className="app-card-images">
                              <img src="/images/flappy-bird.jpg" alt="" />
                           </div>
                           <div className="app-card-text">
                              <h2>App</h2>
                              <p>Flappy bird</p>
                           </div>
                        </div>

                        <div className="app-card-one">
                           <div className="app-card-images">
                              <img src="/images/image-wprd-puzzle.jpg" alt="" />
                           </div>
                           <div className="app-card-text">
                              <h2>App</h2>
                              <p>Image word puzzle</p>
                           </div>
                        </div>

                        <div className="app-card-one">
                           <div className="app-card-images">
                              <img src="/images/snake.jpg" alt="" />
                           </div>
                           <div className="app-card-text">
                              <h2>App</h2>
                              <p>Snake</p>
                           </div>
                        </div>

                        <div className="app-card-one">
                           <div className="app-card-images">
                              <img src="/images/brick-breaker.jpg" alt="" />
                           </div>
                           <div className="app-card-text">
                              <h2>App</h2>
                              <p>Brick Breaker</p>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
