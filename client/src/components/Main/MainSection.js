import classes from './MainSection.module.css';
import SaleItems from '../SaleItems/SaleItems';
import Banner from '../Banner/Banner';
// import Aside from '../Aside/Aside';
// import Banner from '../Banner/Banner';

function MainSection(props) {
  // console.log(props.photoData);
  return (
    <main className={classes.main}>
      <Banner className={classes.one} />
      <div className={classes.two}>
        this is the aside
        <div>Category</div>
        <div>Category</div>
        <div>Category</div>
      </div>
      <div className={classes.three}>
        {/* <div className={classes.sale}> */}
        <SaleItems photoData={props.photoData} />
        {/* </div> */}
      </div>
    </main>
  );
}

export default MainSection;
