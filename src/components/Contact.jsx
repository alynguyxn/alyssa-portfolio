
function Contact() {
  return (
    <section id="contact">
      {/* This new wrapper is the key for the CSS shifting! */}
      <div className="contact-container"> 
        <h2>contact me</h2>
        <div className="contact-links">
          
          {/* Email with Copy Function */}
          <div onClick={copyToClipboard} className="contact-item">
            {email}
            {copied && <div className="copy-feedback">Copied to clipboard!</div>}
          </div>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/alyssa-nguyen610/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
          >
            LinkedIn
          </a>

          {/* GitHub */}
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