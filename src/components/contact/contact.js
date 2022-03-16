import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_odkovkn",
        "template_g0m4ezj",
        form.current,
        "XqzDeeP8yUJ0Lymz7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dvhnghia53@gmail.com</h5>
            <a href="mailto:dvhnghia53@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>DinhVanHuuNghia</h5>
            <a href="https://m.me/DinhVanHuuNghia" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
