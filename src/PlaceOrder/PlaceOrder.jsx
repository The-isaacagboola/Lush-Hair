import styles from "./place.module.css";
import Billing from "../Checkout/Billing";
import paymentCircle from "../assets/paymentCircle.svg";
import verve from "../assets/verve.svg";
import master from "../assets/master.svg";
import visa from "../assets/visa.svg";
import paystack from "../assets/paystack.svg";
import { Link } from "react-router-dom";
function PlaceOrder() {
  const bag = JSON.parse(localStorage.getItem("bag"));
  console.log(bag);
  return (
    <div className={styles.placeOrder}>
      <h1>PLACE ORDER</h1>
      <div style={{ display: "flex", gap: "100px" }}>
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
        <div style={{ width: "40%" }}>
          {bag ? <Billing variant="billDiv" bag={[...bag]} /> : null}

          <div className={styles.paypoint}>
            <img src={paymentCircle} alt="design image" />
            <p>PAYSTACK DEBIT/CREDIT CARD</p>
          </div>
          <div className={styles.cards}>
            <img src={master} alt="mastercard" />
            <img src={paystack} alt="paystack payment option" />
            <img src={verve} alt="vervecard" />{" "}
            <img src={visa} alt="visacard" />
          </div>
        </div>
      </div>

      <Link to="/success">
        <button className={styles.placeBtn}>PLACE ORDER</button>
      </Link>
    </div>
  );
}
export default PlaceOrder;
// use useContext so store global variables available to every part
// also apply the [_ , setcontext] = useContext(contextName) from the details variable where our our grands were defined
