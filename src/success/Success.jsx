// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./success.module.css";

export default function Success() {
  return (
    <div className={styles.success}>
      <h1>ORDER SUCCESSFULLY PLACED</h1>

      <p>Check your email for your receipt.</p>
    </div>
  );
}
