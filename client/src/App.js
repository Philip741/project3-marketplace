// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';

// import { setContext } from '@apollo/client/link/context';

// import { useCurrentUserContext } from '../../context/auth-context';
import { useCurrentUserContext } from './context/auth-context';
import { useQuery } from '@apollo/client';
import { QUERY_LOAD_ALL } from './utils/queries';
// import { QUERY_ALL_USERS_AND_ITEMS } from './utils/queries';

import { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import CurrentUserProvider from './context/auth-context';

import Header from './components/Header/Header';
import MainSection from './components/Main/MainSection';
import SignUp from './components/SignUp/SignUp';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddSaleItem from './components/SaleItems/AddSaleItem/AddSaleItem';
import SellersModalPage from './pages/SellersModalPage/SellersModalPage';
import NotFound from './pages/NotFound';

function App() {
  const [modalIsShow, setModalIsShown] = useState(false);
  const { loading, data } = useQuery(QUERY_LOAD_ALL);

  console.log('data ++', data);

  const loadAllQuery = {
    loading,
    data,
  };

  const {
    currentUser: { isLoggedIn },
  } = useCurrentUserContext();
  console.log(isLoggedIn);

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
      {/* <ApolloProvider client={client}> */}
      {/* <CurrentUserProvider> */}
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
          <MainSection loadAllQuery={loadAllQuery} />
        </Route>
        <Route path="/profile-page/:user">
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
      {/* </CurrentUserProvider> */}
      {/* </ApolloProvider> */}
    </Fragment>
  );
}

export default App;
