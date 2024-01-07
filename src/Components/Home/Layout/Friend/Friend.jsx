import React from "react";
import styled from "styled-components";
import styles from "./Friend.module.css";
import image1 from "../../../../Assets/accomodation.jpg";
import image2 from "../../../../Assets/the-wedding-1a.jpg";
import image3 from "../../../../Assets/the-wedding-4a.jpg";

const Friend = () => {
  return (
    <>
      <FriendsContainer>
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
      </FriendsContainer>
    </>
  );
};

export default Friend;

const FriendsContainer = styled.div`
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
  // border: 1px solid white;
  background: #fff;
  // text-align: center;

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
      overflow: hidden; /* Add overflow property to hide overflowing content */
    }

    .image-container {
      border: 1px solid white;
    }
    
    .image-wrapper {
      margin: -1px; /* Adjust this value to control the size of the white line */
      overflow: hidden;
    }
  img {
      width: 100%;
      border: 1px solid white;
      display: block !important;
      transition: all 0.3s;
      margin: auto;
    }
    
    img:hover {
      filter: brightness(50%);
      transform: scale(1.05);
      cursor: pointer;
      border: 2px solid red; /* Add border on hover */
    }
    
`;
