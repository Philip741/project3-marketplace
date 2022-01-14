// import { useState } from 'react';

import classes from './Header.module.css';

function Header(props) {
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  // const usernameHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(e.target.value);
  // };

  // const passwordhandler = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };

  return (
    <header className={classes.header}>
      <nav className={classes['header_nav']}>
        <h1 className={classes['header_title']}>Marketocracy</h1>
        <form className={classes['header_login-form']}>
          <div className={classes['header_login-form_div']}>
            <input
              className={classes.input}
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className={classes['header_login-form_div']}>
            <input
              className={classes.input}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className={classes.button} type="submit" vlaue="submit">
            Log In
          </button>
          <button onClick={props.onSignup} className={classes.button}>
            Sign Up
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
