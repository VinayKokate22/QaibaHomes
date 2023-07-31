import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heropage}>
      <div className={styles.leftsection}>
        <h2>Unique housing solutions for you</h2>
        <h3>High-Quality, Hassle-Free, and Personalized Buying Made Easy</h3>
        <button>Browse properties</button>
      </div>
      <div className={styles.rightsection}>
        <img
          src="https://media-public.canva.com/GJokI/MAEgN5GJokI/1/s.jpg"
          alt="landingpage image"
        />
      </div>
    </div>
  );
};

export default Hero;
