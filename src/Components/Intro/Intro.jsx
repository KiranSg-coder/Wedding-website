import React from "react";
import styles from "./Intro.module.css";
import him from "../../Assets/him2.jpg";
import her from "../../Assets/her2.jpg";

const Intro = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          THE HAPPY COUPLE
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "15px",
            lineHeight: "26px",
            marginBottom: "25px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
          vel turpis accumsan,
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          efficitur dolor fermentum, tincidunt metus.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, marginLeft: "250px" }}>
          <img src={him} alt="" />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde
            facilis dolores quidem nesciunt veritatis, obcaecati hic facere
            maiores pariatur sit harum quae placeat sequi cum consequuntur
            aspernatur delectus fuga.
          </p>
        </div>

        <div style={{ flex: 1, marginRight: "250px" }}>
          <img src={her} alt="her" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            reiciendis quis impedit molestias dolore beatae eligendi dolorem
            quod natus deleniti inventore sint saepe dignissimos consectetur
            nisi, voluptatum veniam odit? Modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
