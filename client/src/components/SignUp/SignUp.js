import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import { Redirect, Link } from 'react-router-dom';

import classes from './SignUp.module.css';
import Modal from '../UI/Modal';
import Auth from '../../utils/auth';

function SignUp(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes['login-box']}>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={submitHandler} className={classes.left}>
            <h1>Sign up</h1>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password2"
              placeholder="Retype password"
              // value={retypedPassword}
              // onChange={retypedPasswordhandler}
            />
            <button className={classes.button} type="submit">
              SIGN ME UP
            </button>

            {/* <button type="submit" name="signup_submit" value="Sign me up" /> */}
          </form>
        )}

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
