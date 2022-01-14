import classes from './SignUp.module.css';
import Modal from '../UI/Modal';

function SignUp(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes['login-box']}>
        <div className={classes.left}>
          <h1>Sign up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <input type="submit" name="signup_submit" value="Sign me up" />
        </div>

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
