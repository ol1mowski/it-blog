import { useParams, useLoaderData } from "react-router-dom";

import { fetchPosts } from "../../util/http";
import { ReadMorePost } from "./ReadMorePost/ReadMorePost";

const ReadMore = () => {
  const { id } = useParams();

  const fetchData = useLoaderData();

  const { image, title, description, category, date } = fetchData.filter(
    (item) => item.id === id
  )[0];

  return (
   <ReadMorePost title={title} image={image} description={description} category={category} date={date}/>
  );
};

export default ReadMore;

export const readMoreLoader = async () => {
  const data = await fetchPosts();

  return data;
};
