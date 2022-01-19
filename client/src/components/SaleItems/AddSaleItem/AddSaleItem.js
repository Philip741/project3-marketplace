import classes from './AddSaleItem.module.css';
import Card from '../../UI/Card/Card';

function AddSaleItem() {
  return (
    <Card className={classes['form_card']}>
      <form className={classes.form}>
        <div className={classes['form_name-price']}>
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            placeholder="Item Name"
          />

          <label htmlFor="salePrice">Sale Price</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            name="salePrice"
            id="salePrice"
            required="required"
            placeholder="Enter Price"
          />
        </div>

        <div className={classes['form_description-upload-submit']}>
          <label htmlFor="description">
            Provide a brief description (max 100 Character)
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Provide a brief description"
          ></textarea>
          <div className={classes.buttons}>
            <input type="file" id="photos" name="photos" accept="image/*" />
            <label htmlFor="photos"></label>
            <button type="submit"> Submit </button>
            <button>Cancel</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default AddSaleItem;
