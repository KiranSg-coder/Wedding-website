import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Carouselpage from './Components/Carousel/Carouselpage';
import Intro from './Components/Intro/Intro';
import Header from './Components/Hero/Hero';
import Banner from './Components/Banner-1/BannerOne';
import Footer from './Components/Footer/Footer';

import Friend from './Components/Friend/Friend';

function App() {
  return (
    <div>
      <NavBar />
      <Carouselpage />
      <Intro />
      <Banner />
      <Friend />
      <Footer />
    </div>
  );
}

export default App;
