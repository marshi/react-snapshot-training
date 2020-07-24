import React, {useContext} from "react";
import {Image} from "./Image";

import "./Gallery.css"
import {PhotoContext} from "../context/PhotoContext";
import {Photo} from "../context/Photos";

type Props = {
  photos: Array<Photo>
}

export const Gallery = (props: Props) => {
  const context = useContext(PhotoContext)

  const images = props.photos.map((photo, i) => {
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
    return <Image url={url} title="title"/>
  })
  console.log(images)
  return (
    <div className="gallery">
      <ul>{images}</ul>
    </div>
  )
}
