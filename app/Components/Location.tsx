"use client";
import "./style.css";

export default function Location() {
  return (
    <div className="location-container">
      <div className="location-cover">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.2156752112696!2d104.8752993543759!3d11.566537647009897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951bda99de8a5%3A0x58a490e5f6f84630!2sHV8G%2B4XR%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1755239328679!5m2!1sen!2skh"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7866857645117!2d104.87431041038106!3d11.567144244064504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951bd8ff5ab0f%3A0x14bf178a46f8f969!2sNational%20Technical%20Training%20Institute%20(NTTI)!5e0!3m2!1sen!2skh!4v1755239103934!5m2!1sen!2skh"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
