import React from "react";
import styled from "styled-components";
import him from "../../../../Assets/him2.jpg";
import her from "../../../../Assets/her2.jpg";
import "./Intro.module.css";

const Intro = () => {
  return (
    <IntroHeader>
      <h1>The Happy Couple</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel
        turpis accumsan, <br /> efficitur dolor fermentum, tincidunt metus.
      </p>

      <FriendsContainer>
        <Box>
          <div className="box">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={him} alt="Gerrard Leandro" />
              </div>
            </div>
            <p>
              I'm Gerrard Leandro. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer ultrices malesuada ante quis pharetra.
              Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor
              fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam
              mauris non hendrerit faucibus. Proin pulvinar.
            </p>
          </div>
          <div className="box">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={her} alt="Dianne Anna" />
              </div>
            </div>
            <p>
              I'm Dianne Anna. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer ultrices malesuada ante quis pharetra.
              Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor
              fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam
              mauris non hendrerit faucibus. Proin pulvinar.
            </p>
          </div>
        </Box>
      </FriendsContainer>
    </IntroHeader>
  );
};

export default Intro;

const FriendsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 1em;

  .box {
    width: 100%;
    max-width: 400px;
    background: #fff;
    text-align: center;
    padding: 1em;
    padding-top: 20px;

    h2 {
      font-size: 1.3rem;
      font-weight: 500;
      margin: 1rem 0 0.5rem 0;
    }

    p {
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.4rem;
    }

    .image-container {
      width: 100%;
      border: 1px solid white;
      overflow: hidden;
    }

    .image-wrapper {
      margin: -1px;
      overflow: hidden;
    }

    img {
      width: 100%;
      display: block;
      transition: all 0.3s;
      margin: auto;
      border: 1px solid white;
    }

    img:hover {
      filter: brightness(50%);
      transform: scale(1.05);
      cursor: pointer;
      border: 2px solid red;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .box {
      max-width: 100%;
    }
  }
`;

const IntroHeader = styled.div`
  text-align: center;
  padding: 100px;

  h1 {
    /* Add any additional styles for h1 */
  }

  p {
    /* Add any additional styles for p */
  }
`;
