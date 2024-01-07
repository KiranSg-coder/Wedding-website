import React from "react";
import styled from "styled-components";
import "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <IntroHeader>
      <IconContainer>
        <FontAwesomeIcon icon={faFacebook} size="4x" className="icon" />
        <FontAwesomeIcon icon={faGooglePlusG} size="4x" className="icon" />
        <FontAwesomeIcon icon={faTwitter} size="4x" className="icon" />
      </IconContainer>

      <FriendsContainer>
        <Box>
          <div className="box">
            <div className="image-container">
              <div className="image-wrapper"></div>
            </div>
            <p>
              I'm Gerrard Leandro. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce urna urna, imperdiet et purus ut, ultricies
              sollicitudin arcu. Cras placerat, arcu non faucibus suscipit, ex
              arcu consectetur enim, eu malesuada magna turpis sit amet mauris.
              Nullam nec leo at lorem interdum commodo. Etiam mollis massa in
              mauris lacinia porta. Pellentesque tristique, ante nec dictum
              mollis, felis ligula ullamcorper velit, ac auctor est ipsum
              vehicula ex. Donec eu blandit est, id gravida justo. Maecenas
              laoreet laoreet congue. Cras sit amet vestibulum ligula. Ut nec
              erat tristique, iaculis purus ac, pellentesque mi. Donec ac cursus
              est. Nunc id varius enim, ut tincidunt mi. Integer non est eros.
              Aliquam ex magna, elementum at dignissim vitae, placerat quis
              ante. <br /> Morbi a condimentum quam. Nullam quis quam at ex
              eleifend feugiat. Vivamus lacinia quam quam, ac viverra turpis
              pellentesque in. Mauris sollicitudin sapien risus, non sagittis
              velit dictum eget. Suspendisse velit lacus, pulvinar non ante
            </p>
          </div>
          <div className="box">
            <div className="image-container">
              <div className="image-wrapper"></div>
            </div>
            <p>
              ut, venenatis vehicula dolor. In hac habitasse platea dictumst.
              Nunc blandit egestas magna eu commodo. Proin ut eros ante. Mauris
              vitae tempus sem, ac venenatis arcu. Etiam eget blandit arcu, quis
              consequat nunc. Nunc pulvinar vehicula pellentesque. Sed auctor
              scelerisque mi. Curabitur mattis consequat lacus non iaculis.
              Integer justo nibh, ullamcorper et dolor ut, porta dapibus ante.
              Sed quis ex at felis ornare pharetra vitae id dolor. Donec finibus
              sagittis ipsum, tristique luctus tellus pharetra ultrices.
              Suspendisse mollis, tortor non placerat placerat, ligula odio
              luctus est, sit amet scelerisque diam ante tristique massa. Aenean
              molestie tellus a quam porttitor vehicula. Aliquam quis eros
              risus. Sed porttitor elit et diam feugiat egestas. Proin consequat
              suscipit accumsan. Curabitur mauris risus, tincidunt ut odio non,
              scelerisque vehicula metus. Proin urna odio, dignissim vitae nibh
              vitae, consectetur placerat tortor. In a ante ultrices, mollis
              erat eget, sagittis metus. Mauris sodales
            </p>
          </div>
        </Box>
      </FriendsContainer>
    </IntroHeader>
  );
};

export default Main;

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
  padding: 50px;

  h1 {
    /* Add any additional styles for h1 */
  }

  p {
    /* Add any additional styles for p */
  }
`;
const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  .icon {
  }
`;
