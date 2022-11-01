import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="contact"
    >
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." />
          <textarea
            rows="6"
            placeholder="Enter Message..."
            name='"message'
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.div>
  );
}
