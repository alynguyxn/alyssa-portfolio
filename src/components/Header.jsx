import React from 'react';

function Header() {
  return (
    <header id="home">
      {/* Fixed: changed 'header-glow' to 'className="header-glow"' */}
      <div className="header-glow"></div>
      
      <div className="typing-container">
        <h1 className="typing-text">alyssa nguyen</h1>
      </div>
      <h2>web development | graphic design</h2>
    </header>
  );
}

export default Header;