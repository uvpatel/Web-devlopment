import React from "react";
import "./styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6">Feel free to reach out via email or connect on socials.</p>
        <a href="mailto:your@email.com" 
           className="contact-btn">Send Email</a>
      </div>
    </section>
  );
};

export default Contact;
