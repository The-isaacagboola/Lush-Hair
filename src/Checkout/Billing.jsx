import { useEffect, useState } from "react";
import styles from "./bill.module.css";
// eslint-disable-next-line react/prop-types
function Billing(bag) {
  const element = [...bag.bag];
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(6.25);
  const [grand, setGrand] = useState(vat + subTotal);

  useEffect(() => {
    let newSub = 0;
    element.forEach((element) => {
      newSub += element.staticPrice * element.quantity;
    });
    setSubTotal(newSub);

    setVat(0.05 * subTotal);
  }, [subTotal, element]);

  useEffect(() => {
    setGrand(vat + subTotal);
  }, [subTotal, vat]);

  return (
    <div className={styles.billingContainer}>
      <div className={styles.billing}>
        <p>
          SUB-TOTAL <span>${subTotal}.00</span>
        </p>
        <p>
          VAT (5%) <span>${vat.toFixed(2)}</span>
        </p>
        <p>
          SHIPPING <span>FREE</span>
        </p>

        <div className={styles.divLine}></div>

        <p>
          TOTAL <span style={{ fontSize: "36px" }}>${grand.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}
export default Billing;
