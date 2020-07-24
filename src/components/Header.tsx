import React, {FormEvent} from "react";
import Form from "./Form";

import * as H from "history"

type Props = {
  history: H.History
  handleSubmit: (e: FormEvent, query: string, history: H.History) => void
}

export const Header = (props: Props) => {
  return (
    <Form history={props.history} handleSubmit={props.handleSubmit}/>
  )
}

export default Header