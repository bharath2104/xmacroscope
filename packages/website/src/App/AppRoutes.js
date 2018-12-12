import React, { Fragment } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import IntroHeader from '../IntroHeader';
import Home from '../Home';
import NoMatch from '../NoMatch';
import FooterSite from '../FooterSite';
import Exhibit from '../Exhibit';
import Tech from '../Tech';
import Research from '../Research';

function AppRoutes() {
  return (
    <Fragment>
      <BrowserRouter>
        <Fragment>
          <IntroHeader />
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            <Route exact path="/tech" render={() => (<Tech />)} />
            <Route exact path="/experience" render={() => (<Exhibit />)} />
            <Route exact path="/research" render={() => (<Research />)} />
            <Route component={NoMatch} />
            <FooterSite />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Fragment>
  );
}

export default AppRoutes;
