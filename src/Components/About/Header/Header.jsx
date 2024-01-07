// Banner.jsx
import React from "react";
import styles from "./Header.module.css"; // Import the module-scoped CSS
// import weddingImage from "../../Assets/parallax-image-1a.jpg";

const Header = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.header__content}>
          <div className={styles.rotate}>
            <div className={styles.text}>GERRARD LEANDRO</div>
          </div>
        </div>

        <p
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
          vel turpis accumsan, <br /> efficitur dolor fermentum, tincidunt
          metus.
        </p>
      </div>
    </>
  );
};

export default Header;
