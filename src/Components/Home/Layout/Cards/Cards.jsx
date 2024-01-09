import React from "react";
import styled from "styled-components";
import styles from "./Cards.module.css";
import image1 from "../../../../Assets/accomodation.jpg";
import image2 from "../../../../Assets/the-wedding-1a.jpg";
import image3 from "../../../../Assets/the-wedding-4a.jpg";

const Cards = () => {
  return (
    <>
      <CardContainer>
        <div className={styles.text}>
          <h1>THE WEDDING</h1>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor
            sit amet, consectetur adipiscing
          </p>
        </div>
        <Box>
          <Bride>
            <div className="box">
              <div className="image-container">
                <div className="image-wrapper">
                  <img src={image2} alt="image" />
                  <div className="button-container">
                    <button>GET DIRECTION</button>
                  </div>
                </div>
              </div>
              <h2>LOCATION</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non
              </p>
            </div>
            <div className="box">
              <div className="image-container">
                <div className="image-wrapper">
                  <img src={image3} alt="image" />
                  <div className="button-container">
                    <button>GIFT LIST</button>
                  </div>
                </div>
              </div>
              <h2>GIFT REGISTRY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non
              </p>
            </div>
            <div className="box">
              <div className="image-container">
                <div className="image-wrapper">
                  <img src={image1} alt="Women" />
                  <div className="button-container">
                    <button>ACCOMODATION</button>
                  </div>
                </div>
              </div>
              <h2>ACCOMODATION</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non
              </p>
            </div>
          </Bride>
        </Box>
      </CardContainer>
    </>
  );
};

export default Cards;

const CardContainer = styled.div`
  max-width: 1140px;
  margin: 5rem auto 2rem auto;
  padding: 0 15px;

  h1 {
    font-family: "Alex Brush", cursive;

    font-size: 2.5rem;
    margin: 0.5rem 0 1rem 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

const Box = styled.div``;
const Bride = styled.div`
  display: grid;
  grid-gap: 2em;

  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
  }
  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .box {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;

    h2 {
      font-size: 1.3rem;
      font-weight: 500;
      padding: 1rem;
      margin: 1rem 0 0.5rem 0;
    }
    p {
      font-size: 0.9rem;
      font-weight: 500;
      padding: 1rem;
      line-height: 1.4rem;
    }
    .image-container {
      width: 100%;
      border: 1px solid white;
      overflow: hidden;
    }

    .image-container {
      border: 1px solid white;
    }

    .image-wrapper {
      margin: -1px;
      overflow: hidden;
      position: relative;
    }
  }

  .button-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .button-container button {
    appearance: none;
    background-color: transparent;
    border: 2px solid white;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
  }

  .button-container button:disabled {
    pointer-events: none;
  }

  .button-container button:hover {
    color: #fff;
    background-color: #f0394d;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .button-container button:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .image-wrapper:hover .button-container {
    opacity: 1;
  }

  img {
    width: 100%;
    border: 1px solid white;
    // display: block !important;
    transition: all 0.3s;
    margin: auto;
  }

  img:hover {
    filter: brightness(50%);
    transform: scale(1.05);
    cursor: pointer;
    border: 2px solid red;
  }
`;
