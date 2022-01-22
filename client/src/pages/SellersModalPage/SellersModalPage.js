import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../../context/auth-context';

import SellersModal from '../../components/UI/SellersModal/SellersModal';
import classes from './SellersModalPage.module.css';

function SellersModalPage(props) {
  const data = JSON.parse(localStorage.getItem('item') || {});
  console.log('props.sellerData +++', props.sellerData, data);

  return (
    <SellersModal>
      <div className={classes.sellersModal}>
        <section className={classes.sectionOne}>
          <div className={classes.usernameDiv}>
            <h1>USER's NAME</h1>
            <div className={classes.buttonDiv}>
              <Link
                className={classes['usernameDiv_button']}
                to="/profile-page"
              >
                <button className={classes.button}>View Profile</button>
              </Link>
              <Link to="/">
                <button className={classes.button}> Return </button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2>Marketocracy Listings</h2>
          <div>all listings here</div>
          {data && (
            <div className={classes.test}>
              <p>$ {data?.price}</p>
              <p>{data?.name}</p>
              <p>{data?.description}</p>
              <p>{data?.itemPoster}</p>
              <p>{data?.category}</p>
            </div>
          )}
        </section>
      </div>
    </SellersModal>
  );
}

export default SellersModalPage;
