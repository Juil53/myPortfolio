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
                Working with Designers, transforming design into code that a web browser can read and
                display on your screen
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building Admin dashboard, CRUD content through API
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building reusable component.
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
              <p>Build backend server with nodejs,expressJs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build project structure follow MVC format</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Connect to Database mySql by using Sequelize</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using firebase/mockapi/jsonserver for testing Api</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND DEV */}
      </div>
    </section>
  );
}
