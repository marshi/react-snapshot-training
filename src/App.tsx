import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {Gallery} from "./components/Gallery";

import "./index.css"
import {PhotoContext, PhotoContextProvider} from "./context/PhotoContext";
import Header from "./components/Header";

function App() {
  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain"/>}/>
          </Switch>
          <div>
            <Gallery/>
          </div>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  )
}

export default App;
