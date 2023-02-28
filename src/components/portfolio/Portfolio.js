import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/samar.jpg";
import IMG2 from "../../assets/diner.jpg";
import IMG5 from "../../assets/elearning.jpg";
import IMG6 from "../../assets/calamari.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Samar Landing Page",
    demo: "https://samar-five.vercel.app/#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Diner Landing Page",
    demo: "https://diner-bc-20.vercel.app/",
  },
  // {
  //   id: 3,
  //   image: IMG4,
  //   title: "My Portfolio",
  //   demo: "https://portfolio-delta-dusky.vercel.app/#",
  // },
  {
    id: 4,
    image: IMG5,
    title: "E-Learning",
    demo: "https://elearning-juil53.vercel.app/",
  },
  {
    id: 5,
    image: IMG6,
    title: "Leave management",
    demo: "https://calamari-fe.vercel.app/",
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
