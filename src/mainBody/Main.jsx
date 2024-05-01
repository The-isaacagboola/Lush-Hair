import threeLadies from "../assets/3ladies1.svg";
import lookingLeft from "../assets/lookingLeft.svg";
import twoLadiesSm from "../assets/twoLadiesSmall.svg";
import lookingRight from "../assets/lookingRight.svg";
import styles from "./main.module.css";

function Main() {
  return (
    <section className={styles.section1}>
      <div className={styles.area1}>
        <img src={threeLadies} alt="Three fine ladies" />
        <button style={{ color: "var(--clr-white)" }}>SHOP OUR PRODUCTS</button>
      </div>

      <div className={styles.area}>
        <img src={lookingLeft} alt="FIne lady looking left" />
        <div className={styles.inner1}>
          <p>Now available</p>
          <p className="">MINK HAIR</p>
          <button>SHOP PRODUCTS NOW</button>
        </div>
      </div>

      <div className={styles.area}>
        <div className={styles.inner2}>
          <p>Fresh out the oven</p>
          <p>SIGNATURE WIGS</p>
          <button style={{ border: "3px solid hsla(0, 0%, 100%, 1)" }}>
            SHOP PRODUCTS NOW
          </button>
        </div>
        <img src={twoLadiesSm} alt="Two fine ladies" />
      </div>

      <div className={styles.area}>
        <img src={lookingRight} alt="FIne lady looking right" />
        <div className={styles.inner3}>
          <p>Check this out</p>
          <p>CUSTOM WIGS</p>
          <button>SHOP PRODUCTS NOW</button>
        </div>
      </div>
    </section>
  );
}
export default Main;
