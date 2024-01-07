// Banner.jsx
import React from "react";
import styles from "./Footer.module.css"; // Import the module-scoped CSS
// import weddingImage from "../../Assets/parallax-image-1a.jpg";

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "230px 40px 30px",
        }}
      >
        <h1>ARE YOU ATTENDING?</h1>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px", // Adjusted margin for better spacing
        }}
      >
        Please reserve before June 19th, 2015. Lorem ipsum dolor sit amet,
        consectetur adipiscing
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "180px",
        }}
      >
        <button className={styles.rsvpButton}>RSVP</button>
      </div>

      <div className={styles.Container}>
        <div className={styles.header__content}>
          <div className={styles.rotate}>
            <div className={styles.text}>Thank</div>
            <div className={styles.text}>You</div>
          </div>
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
