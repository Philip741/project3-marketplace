import { Link } from 'react-router-dom';
import { Fragment } from 'react';

// import SellersModalPage from '../../pages/SellersModalPage/SellersModalPage';
import classes from './SaleItems.module.css';
import car1 from '../assets/images/test_item-1_car.jpg';

const testData = [
  {
    id: '0',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://picsum.photos/id/0/5616/3744',
  },
  {
    id: '1',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    download_url: 'https://picsum.photos/id/1/5616/3744',
  },
  {
    id: '10',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://unsplash.com/photos/6J--NXulQCs',
    download_url: 'https://picsum.photos/id/10/2500/1667',
  },
  {
    id: '100',
    author: 'Tina Rataj',
    width: 2500,
    height: 1656,
    url: 'https://unsplash.com/photos/pwaaqfoMibI',
    download_url: 'https://picsum.photos/id/100/2500/1656',
  },
  {
    id: '1000',
    author: 'Lukas Budimaier',
    width: 5626,
    height: 3635,
    url: 'https://unsplash.com/photos/6cY-FvMlmkQ',
    download_url: 'https://picsum.photos/id/1000/5626/3635',
  },
  {
    id: '1001',
    author: 'Danielle MacInnes',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/1DkWWN1dr-s',
    download_url: 'https://picsum.photos/id/1001/5616/3744',
  },
  {
    id: '1002',
    author: 'NASA',
    width: 4312,
    height: 2868,
    url: 'https://unsplash.com/photos/6-jTZysYY_U',
    download_url: 'https://picsum.photos/id/1002/4312/2868',
  },
  {
    id: '1003',
    author: 'E+N Photographies',
    width: 1181,
    height: 1772,
    url: 'https://unsplash.com/photos/GYumuBnTqKc',
    download_url: 'https://picsum.photos/id/1003/1181/1772',
  },
  {
    id: '1004',
    author: 'Greg Rakozy',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/SSxIGsySh8o',
    download_url: 'https://picsum.photos/id/1004/5616/3744',
  },
];
console.log(testData[0].url);

function SaleItems() {
  return (
    <Fragment>
      <div className={classes.test}>
        <Link to="/seller-modal">
          <img src={car1} alt="" />
          <span>$12.00</span>
          <span>runs like new</span>
        </Link>
      </div>
      <div className={classes.test}>
        <Link to="/profile-page">
          {' '}
          <img src={car1} alt="" />
        </Link>
      </div>
      <div className={classes.test}>
        <Link to="/profile-page">
          {' '}
          <img src={car1} alt="" />
        </Link>
      </div>
      <div className={classes.test}>
        <Link to="/profile-page">
          {' '}
          <img src={car1} alt="" />
        </Link>
      </div>
      <div className={classes.test}>
        <Link to="/profile-page">
          {' '}
          <img src={car1} alt="" />
        </Link>
      </div>
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
