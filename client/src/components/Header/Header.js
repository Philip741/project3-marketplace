import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { useCurrentUserContext } from '../../context/auth-context';

import Auth from '../../utils/auth';

import classes from './Header.module.css';

function Header(props) {
  const {
    currentUser: { username, handleSetCurrentUser, isLoggedIn },
  } = useCurrentUserContext();
  console.log(isLoggedIn);

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit login form
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log('***data***', data);
      Auth.login(data.login.token);

      handleSetCurrentUser({ ...data.login.user, isLoggedIn: true });
    } catch (e) {
      console.error('***error***', e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <header className={classes.header}>
      <nav className={classes['header_nav']}>
        <h1 className={classes['header_title']}>Marketocracy</h1>

        {isLoggedIn ? (
          <div className={classes.nameLogout}>
            <p>
              Welcome <span>{username}</span>
            </p>
            <button onClick={logoutHandler} className={classes.button}>
              Logout
            </button>
          </div>
        ) : (
          <form
            onSubmit={submitHandler}
            className={classes['header_login-form']}
          >
            <div className={classes['header_login-form_div']}>
              <input
                className={classes.input}
                type="text"
                name="email"
                id="email"
                placeholder="email"
                onChange={handleChange}
                value={formState.email}
              />
            </div>
            <div className={classes['header_login-form_div']}>
              <input
                className={classes.input}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={formState.password}
              />
            </div>
            <button className={classes.button} type="submit" vlaue="submit">
              Log In
            </button>
            <button onClick={props.onSignup} className={classes.button}>
              Sign Up
            </button>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </nav>
    </header>
  );
}

export default Header;
