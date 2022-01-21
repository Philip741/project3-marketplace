// SHOULD NEED THIS TO TALK TO THE SERVER//
// { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import MainSection from './components/Main/MainSection';
import SignUp from './components/SignUp/SignUp';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddSaleItem from './components/SaleItems/AddSaleItem/AddSaleItem';
import SellersModalPage from './pages/SellersModalPage/SellersModalPage';
import NotFound from './pages/NotFound';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {

  const [modalIsShow, setModalIsShown] = useState(false);
  const [photos, setPhotos] = useState([]);

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

  function fetchphotos() {
    fetch('https://picsum.photos/v2/list')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      });
  }

  return (
    <Fragment>
      {/* <ApolloProvider client = {client}> */}
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
            onClickMe={fetchphotos}
          />
          <MainSection photoData={photos} />
          
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
      {/* </ApolloProvider> */}
     
    </Fragment>
  );
}

export default App;
