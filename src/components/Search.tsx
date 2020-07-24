// @flow
import * as React from 'react';
import {Container} from "./Container";

type Props = {
  query: string
};
export const Search = (props: Props) => {
  return (
    <Container query={props.query}/>
  );
};
