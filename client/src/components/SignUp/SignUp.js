import { useState } from 'react';

import classes from './SignUp.module.css';
import Modal from '../UI/Modal';

function SignUp(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [retypedPassword, setRetypedPassord] = useState('');

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordhandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const retypedPasswordhandler = (e) => {
    setRetypedPassord(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const signUpData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    };
    props.onSignUpSubmit(signUpData);
    setEnteredUsername('');
    setEnteredEmail('');
    setEnteredPassword('');
    setRetypedPassord('');
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes['login-box']}>
        <form onSubmit={submitHandler} className={classes.left}>
          <h1>Sign up</h1>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={enteredUsername}
            onChange={usernameHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={enteredEmail}
            onChange={emailHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordhandler}
          />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
            value={retypedPassword}
            onChange={retypedPasswordhandler}
          />

          <button className={classes.button} type="submit">
            SIGN ME UP
          </button>
          {/* <input type="submit" name="signup_submit" value="Sign me up" /> */}
        </form>

        <div className={classes.right}>
          <span className={classes.loginwith}>
            Sign in with
            <br />
            social network
          </span>

          <button className={classes['social-signin']}>
            Log in with facebook
          </button>
          <button className={classes['social-signin']}>
            Log in with Twitter
          </button>
          <button className={classes['social-signin']}>
            Log in with Google+
          </button>
        </div>
        <div className={classes.or}>OR</div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
}

export default SignUp;
