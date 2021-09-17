import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
