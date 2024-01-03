import CategorySection from "../CategorySection/CategorySection";
import PostSection from "../../PostsSection/Posts/PostSection";
import Slider from "../Slider/Slider";
import Footer from '../Footer/Footer';

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
