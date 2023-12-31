import s from "./Slider.module.scss";

import { fetchPosts } from "../../../util/http";
import { useQuery } from "@tanstack/react-query";
import SliderComponent from "./SliderComponent/SliderComponent";
import { memo } from "react";
import Loading from "../../../Components/UI/Loading/Loading";
import Error from "../../../Components/UI/Error/Error";

const Slider = memo(() => {
  const { data, status, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isError) {
    return (
      <main className={s.sliderContainerLoading}>
        <Error message={error.message}/>
      </main>
    );
  }

  if (status === "success" && data) {
    const contentData = data.filter(item => item.id !== 'p4');

    return <SliderComponent data={contentData} />;
  }

  return (
    <main className={s.sliderContainerLoading}>
      <Loading />
    </main>
  );
});

export default Slider;
