import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Sessao from "./pages/Sessao";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/Sessao" component={Sessao} />
      </Switch>
    </BrowserRouter>
  );
}
