import React from 'react';
import './App.css';
import Main from "./components/Main/index";
import { Route, Switch } from 'react-router-dom';
import "././scss/style.scss";


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;


