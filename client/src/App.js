import { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/Main/MainSection";
import SignUp from "./components/SignUp/SignUp";
import Aside from "./components/Aside/aside";

//test//

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
      <MainSection>
        <Aside />
      </MainSection>
      <Footer />
    </Fragment>
  );
}

export default App;
