import React, {createContext, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {apiKey} from "../config";
import {Photo, Photos, PhotosResponse} from "./Photos";

export const PhotoContext = createContext({
  images: Array<Photo>(),
  search: (query: string) => {},
})

type Props = {
  children: React.ReactNode
}

type PhotoContextData = {
  images: Array<Photo>
  search: (query: string) => void
}

type Result = {}

export const PhotoContextProvider = (props: Props) => {
  const [images, setImages] = useState(Array<Photo>())

  const search = (query: string) => {
    axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    ).then((response: AxiosResponse<PhotosResponse>) => {
      setImages((response.data.photos?.photo || []))
    })
  }

  return (
    <PhotoContext.Provider value={{images, search}}>
      {props.children}
    </PhotoContext.Provider>
  )
}
