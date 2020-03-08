
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import history from "./common/store/history";
import Dashboard from  './app/nomeApp/dashboard';


export default function Routes(){
  return(
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
      </Switch>
    </ConnectedRouter>
  )
}