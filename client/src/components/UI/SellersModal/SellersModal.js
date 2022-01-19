import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './SellersModal.module.css';

function SellersModal(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById('sellersOverlay');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default SellersModal;
