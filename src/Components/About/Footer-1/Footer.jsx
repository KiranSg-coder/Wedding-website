// Banner.jsx
import React from "react";
import styles from "./Footer.module.css"; // Import the module-scoped CSS
// import weddingImage from "../../Assets/parallax-image-1a.jpg";

const Footer = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.header__content}>
          <h2
            style={{
              color: "white",
            }}
          >
            GERRARD & DIANNE
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
