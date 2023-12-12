import s from "./Slider.module.scss";

import { fetchPosts, getImageUrl } from "../../../util/http";
import { useQuery } from "@tanstack/react-query";
import SliderComponent from "./SliderComponent/SliderComponent";
import { memo } from "react";
import Loading from "../../../Components/UI/Loading";

const Slider = memo(() => {
  const { data, status, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isError) {
    console.error("Error fetching posts:", error);
    throw error.message;
  }

  if (status === "success" && data) {
    const contentData = data;

    return <SliderComponent data={contentData} />;
  }

  return (
    <main className={s.sliderContainerLoading}>
      <Loading />
    </main>
  );
});

export default Slider;
