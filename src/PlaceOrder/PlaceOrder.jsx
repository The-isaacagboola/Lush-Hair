import styles from "./place.module.css";
import Billing from "../Checkout/Billing";
function PlaceOrder() {
  const bag = JSON.parse(localStorage.getItem("bag"));
  console.log(bag);
  return (
    <div className={styles.placeOrder}>
      <h1>PLACE ORDER</h1>
      <div style={{ display: "flex" }}>
        <div className={styles.inputs}>
          <div className={styles.relatives}>
            <label htmlFor="firstName">FIRST NAME</label>
            <input type="text" name="firstName" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="lastName">LAST NAME </label>
            <input type="text" name="lastName" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="address">ADDRESS </label>
            <input type="text" name="address" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="town">TOWN/CITY </label>
            <input type="text" name="town" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="state">STATE </label>
            <input type="text" name="state" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="COUNTRY">COUNTRY </label>
            <input type="text" name="COUNTRY" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="email">EMAIL ADDRESS </label>
            <input type="email" name="email" />
          </div>
          <div className={styles.relatives}>
            <label htmlFor="phoneNumber">PHONE NUMBER </label>
            <input type="text" name="phoneNumber" />
          </div>
        </div>
        {bag ? <Billing variant="billDiv" bag={[...bag]} /> : null}
      </div>
    </div>
  );
}
export default PlaceOrder;
// use useContext so store global variables available to every part
// also apply the [_ , setcontext] = useContext(contextName) from the details variable where our our grands were defined
