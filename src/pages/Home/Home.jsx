import { Suspense, lazy } from "react";
import Header from "./Header/Header";

const Slider = lazy(() => import("./Slider/Slider"));
import Loading from '../../Components/UI/Loading';

const Home = () => {
  return (
    <>
      <Header />
      <Suspense fallback={Loading}>
        <Slider />
      </Suspense>
    </>
  );
};

export default Home;
