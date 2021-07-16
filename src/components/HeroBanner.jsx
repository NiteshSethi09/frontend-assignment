import { memo } from "react";
import "./css/HeroBanner.css";
const HeroBanner = () => {
  return (
    <section id="heroBanner" className="heroBanner">
      <div className="main-container">
        <div className="back-arrow">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="banner-content">
          <div className="content">
            <div className="headings">
              <h4>Tell Us</h4>
              <h4>How we can help ?</h4>
            </div>
            <div className="description">
              <p>
                Our crew of superheroes are standing by for service &amp;
                support.
              </p>
            </div>
          </div>
          <div className="banner-logo"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroBanner);
