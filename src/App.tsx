import React, {FormEvent} from 'react';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {Gallery} from "./components/Gallery";

import "./index.css"
import {PhotoContext, PhotoContextProvider} from "./context/PhotoContext";
import Header from "./components/Header";
import * as H from "history"
import {Search} from "./components/Search";

function App() {

  const handleSubmit = (e: FormEvent, query: string, history: H.History) => {
    e.preventDefault()
    const url = `/search/${query}`
    history.push(url)
  }

  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route render={props => {
            return (
              <Header history={props.history} handleSubmit={handleSubmit}/>
            )
          }}>
          </Route>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain"/>}/>
            <Route
              path={"/search/:searchInput"}
              render={props => <Search query={props.match.params.searchInput}/>}/>
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  )
}

export default App;
