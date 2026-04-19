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
  <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
    
    {/* THE LILY AS A REAL IMAGE (Impossible to repeat) */}
    <img 
      src="/images/lily3.png" 
      alt=""
      style={{
        position: 'absolute',
        left: '-100px', // Pulls it slightly off-screen to the left
        top: '50%',
        transform: 'translateY(-50%)',
        height: '80%', // Makes it BIG
        opacity: '0.2',
        zIndex: '0',
        pointerEvents: 'none',
        imageRendering: 'pixelated'
      }}
    />

    <div className="contact-container"> 
      <h2>contact me</h2>
      <div className="contact-links">
        {/* ... your email and links ... */}
      </div>
    </div>
  </section>
);
}