import React from "react";
import SingleImage from "./Gallery/SingleImage";
import { picture } from "../data/picture";

const Gallery = () => {
  return (
    <div className="py-3 row">
      {picture.map((img) => {
        return (
          <SingleImage
            id={img.id}
            src={img.src}
            title={img.title}
            vendor={img.vendor}
            price={img.price}
            date={img.date}
            format={img.format}
            size={img.size}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
