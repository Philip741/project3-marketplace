import classes from './Footer.module.css';

import {
  BsFillFileEarmarkLockFill,
  BsFillPersonLinesFill,
  BsFillQuestionSquareFill,
  BsFillPenFill,
} from 'react-icons/bs';
// import contactUs from './images/icons8-contact-us-64.png';
// import fqa from './images/chat-bubble.png';
// import termsAndConditions from './images/contract.png';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes['footer_firstDiv']}>
          <h2 className={classes['footer_h2']}>WHO WE ARE</h2>
        </div>

        <div className={classes['footer_secondDiv']}>
          <p className={classes['footer_para']}>
            Finding what you need on the cheap is our moto. Our website allows
            like-minded people to advertise items for sale and connect with
            perspective buyers. In other words, we cut out the middleman. A
            network of buyers and sellers; find the products you seek while
            saving on the overhead normally charged to buyers and sellers.
          </p>
        </div>
        <div>
          <ul className={classes['footer_ul']}>
            <li className={classes['footer_li']}>
              <BsFillPenFill />
              <a href="#">Terms and Conditins</a>
            </li>
            <li className={classes['footer_li']}>
              <BsFillQuestionSquareFill />
              <a href="#">FAQ</a>
            </li>
            <li className={classes['footer_li']}>
              <BsFillFileEarmarkLockFill />
              <a href="#">Privacy Policy</a>
            </li>
            <li className={classes['footer_li']}>
              <BsFillPersonLinesFill />
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
