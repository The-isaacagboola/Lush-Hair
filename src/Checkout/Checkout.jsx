// import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./checkout.module.css";
import Billing from "./Billing";

function Checkout() {
  //   const location = useLocation();
  //   const { type, texture, bundle, length, quantity } =
  //     location.state.formDetails;

  // This is effectiive way to pass props through links in routed pages

  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag")) || []);

  return (
    <>
      <div
        style={{
          padding: "50px 200px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-passion)",
            fontSize: "100px",
            color: "var(--clr-pink)",
            marginBottom: "50px",
          }}
        >
          BAG
        </h1>
        {bag.map((item, index) => {
          // lushArray.find(item => item.id == )
          return (
            <div key={index} className={styles.product}>
              <img src={item.image} alt="product image" />
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
                  <button
                    onClick={() => {
                      // const newBag = bag.splice(index, 1);
                      // localStorage.setItem("bag", JSON.stringify(newBag));
                      const newBag = [];
                      bag.forEach((object) =>
                        object !== item ? newBag.push(object) : null
                      );
                      setBag(newBag);
                      localStorage.setItem("bag", JSON.stringify(newBag));
                    }}
                    className={styles.removeBtn}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Billing />
    </>
  );
}

export default Checkout;
//populate the bag from details page and populate the html of the bag with them
