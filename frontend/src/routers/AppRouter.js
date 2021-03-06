/**
 * AppRouter.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import PlugResumePage from '../components/PlugResumePage';
import LoginPage from '../components/accounts/LoginPage';
import RegisterPage from '../components/accounts/RegisterPage';
import SectionPage from '../components/profile/ProfilePage';
import NotFoundPage from '../components/NotFoundPage';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ResumePage from '../components/generated/ResumePage';
import ListingPage from '../components/listings/ListingPage';
import EditEducationPage from '../components/profile/education/EditEducationPage';
import EditExperiencePage from '../components/profile/experience/EditExperiencePage';
import EditListingPage from '../components/listings/EditListingPage';
import EditJobHistoryPage from '../components/profile/job-history/EditJobHistoryPage';

export const history = createBrowserHistory();

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PrivateRoute path='/' component={PlugResumePage} exact={true} />
            <PublicRoute path='/login' component={LoginPage} />
            <PublicRoute path='/register' component={RegisterPage} />
            <PrivateRoute path='/profile' component={SectionPage} />
            <PrivateRoute path='/listing' component={ListingPage} />
            <PrivateRoute path='/resume' component={ResumePage} />
            <PrivateRoute path='/education/:id' component={EditEducationPage} />
            <PrivateRoute
              path='/experience/:id'
              component={EditExperiencePage}
            />
            <PrivateRoute
              path='/jobhistory/:id'
              component={EditJobHistoryPage}
            />
            <PrivateRoute path='/listing/:id' component={EditListingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
