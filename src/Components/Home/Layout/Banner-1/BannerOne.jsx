// Banner.jsx
import React from "react";
import styles from "./Banner.module.css"; // Import the module-scoped CSS
// import weddingImage from "../../Assets/parallax-image-1a.jpg";

const BannerOne = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.header__content}>
          <div className={styles.banner}>
            <hr
              style={{
                borderTopWidth: "medium",
                borderTopStyle: "double",
                borderTopColor: "FFF",
              }}
            />
            <h4
              style={{
                color: "white",
                letterSpacing: "3px",
              }}
            >
              *** AT FOXEGAN HOTEL & RESTAURANT, LOS ANGELES ***
            </h4>
            <hr
              style={{
                borderTopWidth: "medium",
                borderTopStyle: "double",
                borderTopColor: "rgb(255, 255, 255)",
              }}
            />
          </div>

          <div className={styles.rotate}>
            <div className={styles.text}>Counting</div>
            <div className={styles.text}>Down</div>
          </div>
          <h2
            style={{
              color: "white",
            }}
          >
            0W 0D 0h 0m 0s
          </h2>
        </div>
      </div>
    </>
  );
};

export default BannerOne;
