import React, {useContext} from "react";
import {Image} from "./Image";

import "./Gallery.css"
import {PhotoContext} from "../context/PhotoContext";

export const Gallery = () => {
  const {images} = useContext(PhotoContext)
  const image = images.map((photo, i) => {
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
    return <Image url={url} title="title"/>
  })
  console.log(image)
  return (
    <div className="gallery">
      <ul>{image}</ul>
    </div>
  )
}