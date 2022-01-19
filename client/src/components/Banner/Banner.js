import { Fragment } from 'react';

import BannerImage from './BannerImage/BannerImage.jpg';
import classes from './Banner.module.css';

function Banner() {
  return (
    <Fragment>
      <div className={classes['header-image']}>
        <p>Deals All Year Long! </p>
        <img src={BannerImage} alt="" />
      </div>
    </Fragment>
  );
}

export default Banner;
