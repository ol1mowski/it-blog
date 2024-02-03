import s from "./Slider.module.scss";

import { useQuery } from "@tanstack/react-query";

import { memo } from "react";

import { fetchElements } from "../../../util/http";

import SliderComponent from "./SliderComponent/SliderComponent";
import Loading from "../../../Components/UI/Loading/Loading";
import Error from "../../../Components/UI/Error/Error";

const Slider = memo(() => {
  const { data, status, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchElements('posts'),
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
