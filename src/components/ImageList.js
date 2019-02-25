import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
const ImageList = props => {
  //console.log("Count = " + props.images);
  const images = props.images.map(image => {
    return (
      <ImageCard key={image.id} image={image} />
    ); /*Added a unique key here */
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
