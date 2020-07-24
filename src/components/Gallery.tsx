import React from "react";
import {Image} from "./Image";

import "./Gallery.css"

export const Gallery = () => {
  const images = [...Array(10)].map((_, i) => {
    return <Image url="https://farm66.staticflickr.com/65535/50142765888_680e6a18c4_m.jpg" title="title"/>
  })
  console.log(images)
  return (
    <div className="gallery">
      <ul>{images}</ul>
    </div>
  )
}