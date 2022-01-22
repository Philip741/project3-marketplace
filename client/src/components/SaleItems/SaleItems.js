import { Link, useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import { useCurrentUserContext } from '../../context/auth-context';
import { useQuery } from '@apollo/client';
import { QUERY_LOAD_ALL } from '../../utils/queries';

// import SellersModalPage from '../../pages/SellersModalPage/SellersModalPage';
import classes from './SaleItems.module.css';
import car1 from '../assets/images/test_item-1_car.jpg';

function SaleItems() {
  const { loading, data } = useQuery(QUERY_LOAD_ALL);

  const history = useHistory();

  const showDetailPage = (e) => {
    localStorage.setItem('item', JSON.stringify(e));
    history.push('/seller-modal');
  };

  console.log('saleItmes page +++', data);

  const {
    currentUser: { isLoggedIn },
  } = useCurrentUserContext();
  console.log(isLoggedIn);

  return (
    <Fragment>
      {/* not sure this is working as intended */}
      {loading && <p>Loading...</p>}
      {isLoggedIn
        ? data &&
          data.items &&
          data.items.map((e, idx) => (
            <div className={classes.test} key={idx}>
              <img src={car1} alt="" onClick={() => showDetailPage(e)} />
              <p>$ {e?.price}</p>
              <p>{e?.name}</p>
              <p>{e?.description}</p>
              <p>{e?.itemPoster}</p>
              <p>{e?.category}</p>
            </div>
          ))
        : data &&
          data.items &&
          data.items.map((e, idx) => (
            <div className={classes.test} key={idx}>
              <img src={car1} alt="" />
              <p>$ {e?.price}</p>
              <p>{e?.name}</p>
              <p>{e?.description}</p>
              <p>{e?.itemPoster}</p>
              <p>{e?.category}</p>
            </div>
          ))}
    </Fragment>
  );
}

export default SaleItems;

// function SaleItems(props) {
//   // console.log(props.photoData);

//   // const transormed = props.photoData.map((photo) => {
//   //   return {
//   //     id: photo.id,
//   //     title: photo.author,
//   //     pic: photo.download_url,
//   //   };
//   // });

//   // console.log(transormed);

//   return (
//     <Card className={classes.card}>

//       {
//         testData.map((item) => {
//           return
//         }
//           </Card>
//   );
// }}
