import classes from './ProfilePage.module.css';
import { Fragment } from 'react';
import tempbackground from './profilePage_header.jpg';

function ProfilePage() {
  return (
    <Fragment>
      <header className={classes['profile-header__temp']}>
        <div className={classes['profile-header__temp__flexDiv']}>
          <div className={classes['profile-header__temp__backgroundder__temp']}>
            <img src={tempbackground} alt="" />
          </div>
          <h2>HELLO: DYNAMIC NAME</h2>
        </div>
      </header>
      <main className={classes['profile-main']}>
        <div>
          <p>Don't Know Yet</p>
        </div>
        <section>
          <div>
            <p>display items for sale</p>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default ProfilePage;
