import React from "react";
import styled from 'styled-components';
import { Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage"
import Question1 from "./pages/Question1"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage}/>
        <Route exact path="/q1" component={Question1}/>

      </Switch>
    </div>
  );
}

export default App;
