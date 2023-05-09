import React from "react";
import CV from "../../assets/Dinh Van Huu Nghia - FrontendDeveloper.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
}
