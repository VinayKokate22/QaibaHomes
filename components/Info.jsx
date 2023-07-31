import Image from "next/image";
import React from "react";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";
import img4 from "../public/4.jpg";
import styles from "./info.module.css";
const Info = () => {
  return (
    <div className={styles.infopage}>
      <div className={styles.infotitle}>
        <h3>We are here to revolutionize your experience</h3>
      </div>
      <div className={styles.infowrapper}>
        <div className={styles.singleinfo}>
          <div>
            <Image src={img1} width={100} height={100} />
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            <p>
              lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum.
              lorem ipsum. lorem ipsum.
            </p>
          </div>
        </div>
        <div className={styles.singleinfo}>
          <div>
            <Image src={img2} width={100} height={100} />
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            <p>
              lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum.
              lorem ipsum. lorem ipsum.
            </p>
          </div>
        </div>
        <div className={styles.singleinfo}>
          <div>
            <Image src={img3} width={100} height={100} />
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            <p>
              lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum.
              lorem ipsum. lorem ipsum.
            </p>
          </div>
        </div>
        <div className={styles.singleinfo}>
          <div>
            <Image src={img4} width={100} height={100} />
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            <p>
              lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum.
              lorem ipsum. lorem ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
