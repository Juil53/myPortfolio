import React from "react";
import "./about.css";
import ME from "../../assets/me6.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 - Year Experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Small Projects</h5>
              <small>6 Completed</small>
            </article>
          </div>
          <p>
            I am Web Developer with 1 year of experience in building a web application by ReactJS/Nextjs
          </p>
          <p>
            <span className="about__highlight">During the official working period at Pivot company:</span><br />
            -	Implementing updating project interface of the company as requested.<br />
            -	Updating features on CMS pages on demand.<br />
            -	Investigating arising bugs and reporting to the superiors.<br />
            -	Self-studying about Typescript, NextJS, VueJS, MySQL, Tailwindcss, Sanity CMS, …<br />
          </p>
          <p>
            <span className="about__highlight">During the Intership period at Pivot company:</span><br />
            -	Choosing ReactJS technology and building up Ecommerce project regarding to clothing shopping.<br />
            -	Utilizing firebase for authentication and data archive.<br />
            -	Building up UI layout for client pages.<br />
            -	Building up Admin page to manage the project, CRUD products, users, authentication, authorization, …<br />
            -	Co-operating with partners to optimalize the problem of code merging.<br />
            -	Presenting products on a weekly basis and acquiring my mentor’s comments to improve coding convention and divide components.<br />
          </p>
          <p>
            <span className="about__highlight">Join in Fullstack Bootcamp courses at Cybersoft:</span><br />
            -	Front End (HTML/CSS/Bootstrap/ReactJS/Redux, …)<br />
            -	Back End (NodeJS/ExpressJS/Sequelize, …)<br />
            -	Implementing advanced exercises such as: buiding up a website about movie ticket booking with provided API.<br />
            -	Making plans with my team members.<br />
            -	Building up project structure and basic layout.<br />
            -	Assigning tasks, code merging, building UI.<br />
            -	Studying and applying new library and sharing with my team members.<br />
            -	Testing ordinary cases.<br />
            -	Implementing E-learning project.
          </p>
          <p>
            In the next 2 years, I will work and learn aggressively to push
            myself toward the goal of becoming an experienced Front-End
            developer
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
