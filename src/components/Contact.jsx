import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "lyssbliss610@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset message after 2s
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        
        {/* Email with Copy Function */}
        <div onClick={copyToClipboard} className="contact-item">
          {email}
          {copied && <div className="copy-feedback">Copied to clipboard!</div>}
        </div>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-item"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-item"
        >
          GitHub
        </a>

      </div>
    </section>
  );
}