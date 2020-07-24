import React, {ChangeEvent, FormEvent, useState} from 'react';
import "./Form.css"
import * as H from "history"

type Props = {
  history: H.History
  handleSubmit: (e: FormEvent, query: string, history: H.History) => void
}

const Form = (props: Props) => {

  const [query, setQuery] = useState("")

  const updateSearchQuery = (e: ChangeEvent) => {
    const v = (e.target as HTMLInputElement).value
    setQuery(v)
  }

  return (
    <form
      className="form"
      onSubmit={e => props.handleSubmit(e, query, props.history)}
    >
      <input
        type="text"
        name="search"
        onChange={updateSearchQuery}
      />
      <button
        type={"submit"}
        className={`${query.trim() ? "active" : null}`}
      >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  )
}

export default Form;