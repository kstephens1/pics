import React from "react";

const ImageList = props => {
  //console.log("Count = " + props.images);
  const images = props.images.map(image => {
    return <img src="" />;

    //    return <img src={images.urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
