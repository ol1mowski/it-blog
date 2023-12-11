import { lazy } from "react";
import Header from "./Header/Header";

const Slider = lazy(() => import("./Slider/Slider"));

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
    </>
  );
};

export default Home;
