import classes from './MainSection.module.css';
import Aside from '../Aside/aside';
function MainSection() {
  return (
    <main>
      <div className={classes.main}>
         <div className={classes.item}>
             <Aside />
        </div>
        <div className={classes.item}>
             <h1>This is for the main section to include the Aside </h1>
        </div>
        <div className={classes.item}>
        test right column
        </div>
      </div>
    </main>
  );
}

export default MainSection;
