import classes from './MainSection.module.css';
import SaleItems from '../SaleItems/SaleItems';
import Banner from '../Banner/Banner';
// import Aside from '../Aside/Aside';
// import Banner from '../Banner/Banner';

function MainSection(props) {
  // console.log(props.photoData);
  return (
    <main className={classes.main}>
      
      <div className={classes.aside}>
        <div>Category</div>
        <div>Category</div>
        <div>Category</div>
      </div>
      <div className={classes.banner}>
      <Banner  />
      
      </div>
      
      <div className={classes.three}>
      <div className={classes.category}><h2>Automotive</h2></div>
        
        <SaleItems photoData={props.photoData} />
       
      
      </div>
    </main>
  );
}

export default MainSection;
