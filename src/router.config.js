import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {DummyComponent} from "./core/dummy.component";

const Router = () => {
  return (
    <Switch>
      <Route path='/' component={DummyComponent} />
    </Switch>
  )
};

export default Router;
