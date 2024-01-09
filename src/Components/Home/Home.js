import React from "react";
import NavBar from "./Layout/Navbar/NavBar";
import Carouselpage from "./Layout/Carousel/Carouselpage";
import Intro from "./Layout/Intro/Intro";
import Banner from "./Layout/Banner-1/BannerOne";
import Card from "./Layout/Cards/Cards";
import Footer from "./Layout/Footer/Footer";

function Home() {
    return (
        <div>
            <NavBar />
            <Carouselpage />
            <Intro />
            <Banner />
            <Card />
            <Footer />
        </div>
    );
}

export default Home;
