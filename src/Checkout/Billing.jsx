/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./bill.module.css";

function Billing(props) {
  const element = [...props.bag];
  const variant = props.variant;
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

  console.log(variant);
  return (
    <div
      className={
        variant === "billingContainer"
          ? styles.billingContainer
          : styles.billDiv
      }
    >
      <div
        className={
          variant === "billingContainer" ? styles.billing : styles.billingOrder
        }
      >
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
