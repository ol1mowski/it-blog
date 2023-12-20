import { useContext, useState } from "react";
import CategoryContext from "../Context/categoryContext";

const [postData, setPostData] = useState("");

const { currentCategory } = useContext(CategoryContext);


export const setCategory = (data) => {
  if (data) {
    switch (+currentCategory) {
      case 1:
        setPostData(data);
        break;
      case 2:
        const filterReactData = data.filter(
          (item) => item.category === "React"
        );
        setPostData(filterReactData);
        break;
      case 3:
        const filterDevData = data.filter(
          (item) => item.category === "Web Development"
        );
        setPostData(filterDevData);
        break;
      case 4:
        const filterTipsData = data.filter(
          (item) => item.category === "Learn Tips"
        );
        setPostData(filterTipsData);
        break;
      default:
        setPostData(data);
    }
  }
  return postData;
};
