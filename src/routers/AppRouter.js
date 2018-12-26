import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import JintroDashboardPage from '../components/JintroDashboardPage';
import JintroViewerPage from '../components/JintroViewerPage';
import AddJintroPage from '../components/AddJintroPage';
import EditJintroPage from '../components/EditJintroPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const exclusionArray = [
  '/edit/:id'
]

const AppRouter = ({location}) => (
      <div>
        { 
          !location.pathname.includes('edit') && <Header/> 
          // console.log('From AppRouter: ', !location.pathname.includes('edit'))
        }  
        { 
          // exclusionArray.indexOf(match.path) < 0 && <Header/> 
        }
        <Switch>
          <Route path="/" component={JintroDashboardPage} exact={true} />
          <Route path="/create" component={AddJintroPage} />
          <Route path="/edit/:id" component={EditJintroPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>    
);

export default withRouter(AppRouter);