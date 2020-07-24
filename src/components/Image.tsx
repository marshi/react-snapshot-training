import React from "react"

type Props = {
  url: string,
  title: string
}

export const Image = (props: Props) => {
  return (
    <li>
      <img src={props.url} alt={props.title}/>
    </li>)
}
