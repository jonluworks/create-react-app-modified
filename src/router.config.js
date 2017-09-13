import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {DummyComponent} from "./core/dummy.component";

export default function Router() {
  return (
    <Switch>
      <Route path='/' component={DummyComponent} />
    </Switch>
  )
}
