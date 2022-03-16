import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

export default function Service() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Working with Graphic, User Experience, or Web Designers to help
                ensure design ideas can be made into a website that is easy to
                use
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Transforming design into code that a web browser can read and
                display on your screen
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing websites that work and look good on any screen, from
                24-inch computer monitors to five-inch smartphone screens (this
                is called responsive design)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing websites and fixing bugs or other issues</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Back End</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Coming Soon!</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT */}
      </div>
    </section>
  );
}
