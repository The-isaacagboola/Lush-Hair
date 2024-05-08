import { useLocation } from "react-router-dom";
import styles from "./checkout.module.css";
import image from "../assets/Rectangle 5 (3).svg";

function Checkout() {
  const location = useLocation();
  //   const { type, texture, bundle, length, quantity } =
  //     location.state.formDetails;

  // This is effectiive way to pass props through links in routed pages
  const bag = JSON.parse(localStorage.getItem("bag")) || [];

  return (
    <div
      style={{
        padding: "120px 200px",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-passion)",
          fontSize: "100px",
          color: "var(--clr-pink)",
          marginBottom: "80px",
        }}
      >
        BAG
      </h1>
      {bag.map((item, index) => (
        <div key={index} className={styles.product}>
          <img src={image} alt="product image" />
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "100px",
              }}
            >
              <h2>{item.name}</h2>
              <p className={styles.price}>$125.00</p>
            </div>

            <div className={styles.specs}>
              <h3>
                HAIR TYPE: <span>{item.type}</span>
              </h3>
              <h3>
                BUNDLE QTY: <span>{item.bundle}</span>
              </h3>
              <h3>
                QUANTITY: <span>{item.quantity}</span>
              </h3>
              <h3>
                HAIR TEXTURE: <span>{item.texture}</span>
              </h3>
              <h3>
                HAIR LENGTH: <span>{item.length}</span>
              </h3>
              <button className={styles.removeBtn}>REMOVE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Checkout;
//populate the bag from details page and populate the html of the bag with them
