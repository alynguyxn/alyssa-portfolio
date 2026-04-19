export default function Resume() {
  const resumePath = "/AN_Resume.pdf"; // Path from the public folder

  return (
    <section id="resume">
      <h2>resume</h2>
      
      {/* 1. The Download Button */}
      <div className="resume-download">
        <a href={resumePath} download="AN_Resume.pdf" className="download-btn">
          Download PDF
        </a>
      </div>

      {/* 2. The PDF Viewer */}
      <div className="resume-viewer">
        <iframe 
          src={resumePath} 
          width="100%" 
          height="800px" 
          title="Alyssa Nguyen Resume"
        />
      </div>
    </section>
  );
}