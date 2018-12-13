import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import JintroDashboardPage from '../components/JintroDashboardPage';
import AddJintro from '../components/AddJintro';
import EditJintroPage from '../components/EditJintroPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={JintroDashboardPage} exact={true} />
          <Route path="/create" component={AddJintro} />
          <Route path="/edit/:id" component={EditJintroPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;