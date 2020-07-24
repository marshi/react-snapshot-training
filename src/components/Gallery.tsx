import React, {useContext} from "react";
import {Image} from "./Image";

import "./Gallery.css"
import {PhotoContext} from "../context/PhotoContext";

export const Gallery = () => {
  const context = useContext(PhotoContext)

  const images = [...Array(10)].map((_, i) => {
    return <Image url="https://farm66.staticflickr.com/65535/50142765888_680e6a18c4_m.jpg" title="title"/>
  })
  // const image = images.map((photo, i) => {
  //   const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
  //   return <Image url={url} title="title"/>
  // })
  console.log(images)
  return (
    <div className="gallery">
      <ul>{images}</ul>
    </div>
  )
}
