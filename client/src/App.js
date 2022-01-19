import { Fragment, useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/Main/MainSection";
import SignUp from "./Components/SignUp/SignUp";
import Aside from "./Components/Aside/aside";

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
