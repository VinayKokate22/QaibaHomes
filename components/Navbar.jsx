import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpg";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src={logo} width={200} height={100} className={styles.logo} />
      <ul>
        <li className={styles.logotitle}>Qaiba Homes</li>
      </ul>
    </div>
  );
};

export default Navbar;
