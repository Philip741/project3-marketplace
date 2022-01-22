import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../../context/auth-context';

import SellersModal from '../../components/UI/SellersModal/SellersModal';
import classes from './SellersModalPage.module.css';
import car1 from '../../components/assets/images/test_item-1_car.jpg';

function SellersModalPage(props) {
  const data = JSON.parse(localStorage.getItem('item') || {});
  console.log('props.sellerData +++', props.sellerData, data);

  return (
    <SellersModal>
      <div className={classes.sellersModal}>
        <section className={classes.sectionOne}>
          <div className={classes.usernameDiv}>
            <h1>{data?.itemPoster}</h1>
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
          <h2 className={classes['heading_h2']}>Marketocracy Listing</h2>
          <div>
            <h3 className={classes['heading_h3']}>Listing</h3>
            {data && (
              <div className={classes['listing_info-div']}>
                <div className={classes.imgDiv}>
                  <img src={car1} alt="" />
                </div>
                <div className={classes.infoDiv}>
                  <p> Cost: ${data?.price}</p>
                  <p>Title: {data?.name}</p>
                  <p>Description: {data?.description}</p>
                  {/* <p>{data?.itemPoster}</p> */}
                  <p>Category: {data?.category}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </SellersModal>
  );
}

export default SellersModalPage;
