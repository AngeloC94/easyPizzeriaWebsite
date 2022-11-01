import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import BannerImage from "../assets/pizza.jpeg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="home"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="headerContainer">
        <h1> Priol's Pizzeria </h1>
        <p> BEST PIZZA FROM YOUR FAVORITE PIZZA MASTER</p>
        <div className="wrapperButton">
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
          <Link to="/about">
            <button> ABOUT US </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
