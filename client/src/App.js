import { Fragment, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainSection from './components/Main/MainSection';
import SignUp from './components/SignUp/SignUp';
import Aside from './components/Aside/aside';

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

  return (
    <Fragment>
      {modalIsShow && <SignUp onClose={hideModalhandler} />}
      <Header onSignup={showModalHandler} onLogIn={logInHandler} />
      <MainSection>
             <Aside />
      </MainSection>
      <Footer />
    </Fragment>
  );
}

export default App;
