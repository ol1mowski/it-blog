import { SubpageComponent } from "./SubpageComponent/SubpageComponent";

import { useLoaderData } from "react-router-dom";

const SubpageHeader = ({ id }) => {

  const data = useLoaderData();


  const { image, title, description, subtitle, icons } = data.find((data) => data.id === id);
  

  return (
    <SubpageComponent image={image} title={title} subtitle={subtitle} description={description} iconOne={icons[0]} iconTwo={icons[1]}/>
  );
};

export default SubpageHeader;

export const subpageLoader = async () => {
  const data = await fetchPosts();

  return data;
};
