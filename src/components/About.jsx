function About() {
  return (
    <section id="about">
      <div className="about-container">
        
        {/* Your Photo */}
        <img 
          src="/images/anpic.jpg" 
          alt="Alyssa Nguyen" 
          className="about-photo" 
        />

        {/* Your Text Content */}
        <div className="about-text">
          <h1>about me</h1>
          <h3>
            Hi! My name is Alyssa and I enjoy designing and coding websites. 
            I'm a Junior majoring in Computer Science at the University of Central Florida. 
            In my free time, I enjoy playing games, discovering new music, 
            and spending time with friends!
          </h3>
        </div>

      </div>
    </section>
  );
}

export default About;