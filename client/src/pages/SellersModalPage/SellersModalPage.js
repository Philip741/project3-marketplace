import { Link } from 'react-router-dom';

import SellersModal from '../../components/UI/SellersModal/SellersModal';
import classes from './SellersModalPage.module.css';

function SellersModalPage(props) {
  return (
    <SellersModal>
      <div className={classes.sellersModal}>
        <section className={classes.sectionOne}>
          <div className={classes.usernameDiv}>
            <h1>USER's NAME</h1>
            <Link className={classes['usernameDiv_button']} to="/profile-page">
              <button>View Profile</button>
            </Link>
          </div>
        </section>

        <section>
          <h2>Marketocracy Listings</h2>
          <div>all listings here</div>
        </section>
      </div>
    </SellersModal>
  );
}

export default SellersModalPage;
