import React from 'react';
import { Router, Switch } from 'react-router-dom';
import JintroDashboardPage from '../components/JintroDashboardPage';
import JintroViewerPage from '../components/JintroViewerPage';
import AddJintroPage from '../components/AddJintroPage';
import EditJintroPage from '../components/EditJintroPage';
import NotFoundPage from '../components/NotFoundPage';
import JintroHomePage from '../components/JintroHomePage';
import createHistory from 'history/createBrowserHistory';
import ViewerRoute from './ViewerRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={JintroDashboardPage} exact={true} />
        <ViewerRoute path="/v/:id" component={JintroViewerPage} />
        <PublicRoute path="/home" component={JintroHomePage} />
        <PublicRoute path="/create" component={AddJintroPage} />
        <PublicRoute path="/edit/:id" component={EditJintroPage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>  
  </Router>        
);

export default AppRouter;