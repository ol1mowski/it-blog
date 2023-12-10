import s from "./Slider.module.scss";

import loadingIcon from "../../../assets/loading_icon.gif";

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

  const { data: imageData, status: imageStatus } = useQuery({
    queryKey: ["images"],
    queryFn: getImageUrl,
    gcTime: 100000,
    staleTime: 100000,
  });

  if (isError) {
    console.error("Error fetching posts:", error);
    throw error.message;
  }

  if (status === "success" && imageStatus === "success" && imageData && data) {
    const contentData = data;

    return <SliderComponent data={contentData} images={imageData} />;
  }

  return (
    <main className={s.sliderContainerLoading}>
      <Loading />
    </main>
  );
});

export default Slider;
