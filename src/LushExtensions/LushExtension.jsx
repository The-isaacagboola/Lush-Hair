import { Link } from "react-router-dom";
import styles from "./lush.module.css";
import lushArray from "./products";

function LushExtension() {
  return (
    <section className={styles.lush}>
      <div className={styles.headDiv}>
        <div className={styles.head}>
          {" "}
          <div>
            <h1>BECOME A LUSH LADY</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sapien arcu, euismod ut turpis id, faucibus ultrices lacus. Fusce
              condimentum mauris non mattis tincidunt. Aliquam sed lacus quis
              purus pulvinar ultricies in a ligula. Aliquam quis felis auctor
              mauris pretium auctor.
            </p>
            <button>I WANT TO BUY!</button>
          </div>
        </div>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.product}>
          {lushArray.map((item) => (
            <Link
              to={`/details/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              key={item.id}
            >
              <div>
                <img src={item.image} alt="image" />
                <h3> {item.name}</h3>
                <p>{item.price}</p>
                <Link className={styles.link} to="/">
                  {" "}
                  {"View Product".toUpperCase()}
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LushExtension;
