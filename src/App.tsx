import './App.css'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import { Footer } from './layouts/NavbarAndFooter/Footer'
import { HomePage } from './layouts/HomePage/HomePage'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { SearchBookPage } from './layouts/SearchBookPage/SearchBookPage'
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage'
import { oktaConfig } from './lib/oktaConfig'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { LoginCallback, Security } from '@okta/okta-react';
import { LoginWidget } from './auth/LoginWidget';


const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginUri = async (_oktaAuth: any, originUri: any) => {
    history.replace(toRelativeUrl(originUri || '/', window.location.origin));
  };


  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginUri}
        onAuthRequired={customAuthHandler}>

        <Navbar />
        <div className='flex-grow-1'>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>

            <Route path='/home'>
              <HomePage />
            </Route>

            <Route path='/search'>
              <SearchBookPage />
            </Route>

            <Route path='/checkout/:bookId'>
              <BookCheckoutPage />
            </Route>

            <Route path='/login' render={() =>
              <LoginWidget config={oktaConfig} />} />
            <Route path='/login/callback' component={LoginCallback} />

          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  )
}