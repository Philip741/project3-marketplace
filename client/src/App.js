import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CurrentUserProvider from './context/auth-context';

import Header from './components/Header/Header';
import MainSection from './components/Main/MainSection';
import SignUp from './components/SignUp/SignUp';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddSaleItem from './components/SaleItems/AddSaleItem/AddSaleItem';
import SellersModalPage from './pages/SellersModalPage/SellersModalPage';
import NotFound from './pages/NotFound';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [modalIsShow, setModalIsShown] = useState(false);

  const logInHandler = (e) => {
    console.log(e);
  };

  const showModalHandler = (e) => {
    e.preventDefault();
    setModalIsShown(true);
  };

  const hideModalhandler = () => {
    setModalIsShown(false);
  };

  const logInSubmitHandler = (logInInfo) => {
    console.log(logInInfo);
  };

  const signUpSubmitHandler = (signUpInfo) => {
    console.log(signUpInfo);
  };

  return (
    <Fragment>
      <ApolloProvider client={client}>
        <CurrentUserProvider>
          <Switch>
            <Route path="/" exact>
              {modalIsShow && (
                <SignUp
                  onClose={hideModalhandler}
                  onSignUpSubmit={signUpSubmitHandler}
                />
              )}
              <Header
                onSignup={showModalHandler}
                onLogIn={logInHandler}
                onLogInSubmit={logInSubmitHandler}
              />
              <MainSection />
            </Route>
            <Route path="/profile-page">
              <ProfilePage />
            </Route>
            <Route path="/add-sale-item">
              <AddSaleItem />
            </Route>
            <Route path="/seller-modal">
              <SellersModalPage onClose={hideModalhandler} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </CurrentUserProvider>
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
