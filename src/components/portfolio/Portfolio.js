import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/samar.jpg";
import IMG2 from "../../assets/diner.jpg";
import IMG3 from "../../assets/movie.jpg";
import IMG4 from "../../assets/portfoliocode.jpg";
import IMG5 from "../../assets/elearning.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Samar Landing Page",
    github: "https://github.com/Juil53/Samar",
    demo: "https://samar-five.vercel.app/#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Diner Landing Page",
    github: "https://github.com",
    demo: "https://diner-bc-20.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cinema Booking Ticket",
    github: "https://github.com/Juil53/BC20_ReactCinema",
    demo: "https://bc-20-react-cinema.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Front End Portfolio",
    github: "https://github.com/Juil53/myPortfolio",
    demo: "https://portfolio-delta-dusky.vercel.app/#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Elearning",
    github: "https://github.com/Juil53/Elearning-ReactJs",
    demo: "https://elearning-juil53.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Coming Soon",
    github: "https://github.com",
    demo: "https:google.com",
  },
];

export default function Portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((article) => {
          return (
            <article className="portfolio__item" key={article.id}>
              <div className="portfolio__item-img">
                <img src={article.image} alt={article.image} />
              </div>
              <h3>{article.title}</h3>
              <div className="portfolio__item-cta">
                <a href={article.github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={article.demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
