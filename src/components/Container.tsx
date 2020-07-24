import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Gallery} from "./Gallery";
import {PhotoContext} from "../context/PhotoContext";

type Props = {
  query: string
};

export const Container = (props: Props) => {
  const {images, search} = useContext(PhotoContext)
  useEffect(() => {
    search(props.query)
  }, [props.query])
  return (
    <Gallery photos={images}/>
  );
};
