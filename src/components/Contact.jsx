import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "lyssbliss610@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <section id="contact">
      <div className="contact-container"> 
        <h2>contact me</h2>
        <div className="contact-links">
          
          <div onClick={copyToClipboard} className="contact-item">
            {email}
            {copied && <div className="copy-feedback">Copied to clipboard!</div>}
          </div>

          <a 
            href="https://www.linkedin.com/in/alyssa-nguyen610/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
          >
            LinkedIn
          </a>

          <a 
            href="https://github.com/alynguyxn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}