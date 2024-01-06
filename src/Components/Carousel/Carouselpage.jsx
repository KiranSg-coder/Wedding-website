import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import exampleImage1 from "../../Assets/slide-image-1920-d.jpg"; // Import your image files
import exampleImage2 from "../../Assets/slide-image-1920-f.jpg";
import exampleImage3 from "../../Assets/slide-image-1920-h.jpg";
import { CarouselCaption } from "react-bootstrap";
import "./Carouselpage.module.css";
import styles from "./Carouselpage.module.css";

function Carouselpage() {
  return (
    <div>
      <Carousel className={styles.wrapper} xs={6} md={4} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImage1} // Use the imported image file
            alt="First slide"
            width="100%"
            height="100%"
          />
          <CarouselCaption>
            <div className={styles.curve}>
              <div className={styles.save}>Save</div>
              <div className={styles.the_date}>The Date</div>
              <div className={styles.date}>
                - 19<span className={styles.color}>.</span>2
                <span className={styles.color}>.</span>23 -
              </div>
            </div>
            <div className={styles.banner}>
              <hr
                style={{
                  borderWidth: 5,
                  height: 4,
                  width: "50%",
                  size: "20%",
                }}
              />
              <hr />
              <h4>*** WE ARE GETTING MARRIED ***</h4>
              <hr className={styles.hr} />
              <hr />
            </div>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImage2} // Use the imported image file
            alt="Second slide"
            width="100%"
            height="100%"
          />
          <CarouselCaption>
            <div className={styles.curve}>
              <div className={styles.save}>Save</div>
              <div className={styles.the_date}>The Date</div>
              <div className={styles.date}>
                - 19<span color="pink">.</span>2<span color="pink">.</span>23 -
              </div>
            </div>
            <div className={styles.banner}>
              <hr className={styles.hr} />
              <hr />
              <h4>*** WE ARE GETTING MARRIED ***</h4>
              <hr className={styles.hr} />
              <hr />
            </div>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImage3} // Use the imported image file
            alt="Third slide"
            width="100%"
            height="100%"
          />
          <CarouselCaption>
            <div className={styles.curve}>
              <div className={styles.save}>Save</div>
              <div className={styles.the_date}>The Date</div>
              <div className={styles.date}>
                - 19<span color="pink">.</span>2<span color="pink">.</span>23 -
              </div>
            </div>
            <div className={styles.banner}>
              <hr className={styles.hr} />
              <hr />
              <h4>*** WE ARE GETTING MARRIED ***</h4>
              <hr className={styles.hr} />
              <hr />
            </div>
          </CarouselCaption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselpage;
