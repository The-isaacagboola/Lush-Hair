import { Link } from "react-router-dom";
import styles from "./lush.module.css";
import image1 from "../assets/extension1.svg";
import image2 from "../assets/extension2.svg";
import image3 from "../assets/extension3.svg";

const lushArray = [
  {
    id: 1,
    name: "BRAZILIAN EXTENSIONS",
    image: image1,
    price: " $70.00 — $205.00",
  },
  {
    id: 2,
    name: "INDIAN EXTENSIONS",
    image: image2,
    price: "$100.00 — $195.00",
  },
  {
    id: 3,
    name: "PONY TAILS",
    image: image3,
    price: "OUT OF STOCK",
  },
];

function LushExtension() {
  return (
    <section className={styles.lush}>
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

      <div className={styles.productContainer}>
        {lushArray.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="image" />
            <h3> {item.name}</h3>
            <p>{item.price}</p>
            <Link to="/"> View Product</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
export default LushExtension;
