import React from "react";
import CategorySection from "../CategorySection/CategorySection";
import PostSection from "../PostsSection/Posts/PostSection";
import Slider from "../Home/Slider/Slider";
import Footer from '../Home/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Slider />
      <CategorySection />
      <PostSection />
      <Footer />
    </>
  );
};

export default HomePage;
