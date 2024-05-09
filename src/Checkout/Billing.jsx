import { Link } from "react-router-dom";
import styles from "./bill.module.css";
function Billing() {
  return (
    <div className={styles.billingContainer}>
      <div className={styles.billing}>
        <p>
          SUB-TOTAL <span>$125.00</span>
        </p>
        <p>
          VAT (5%) <span>$6.25</span>
        </p>
        <p>
          SHIPPING <span>FREE</span>
        </p>

        <div className={styles.divLine}></div>

        <p>
          TOTAL <span>$125.00</span>
        </p>
      </div>
      <Link>
        <button>CHECKOUT</button>
      </Link>
    </div>
  );
}
export default Billing;
