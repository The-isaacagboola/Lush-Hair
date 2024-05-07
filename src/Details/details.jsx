import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import lushArray from "../LushExtensions/products";
import topImage from "../assets/topImage.svg";
import styles from "./details.module.css";

function Details() {
  const [hairtype, setHairtype] = useState("human");
  const { id } = useParams();
  const product = lushArray.find((item) => item.id == id);

  return (
    <div>
      <img src={topImage} alt="image of 3 ladies" />

      <div className={styles.details}>
        <img src={product.image} alt="product-image" />
        <div style={{ display: "grid", height: "1012px" }}>
          <div style={{ marginTop: "70px" }}>
            <h2>{product.name}</h2>
            <p>
              If you require a ponytail with shorter or longer lengths to the
              options available, you can request a custom order by sending an
              email.
            </p>

            <div className={styles.detailContainer}>
              <div className={styles.flex}>
                <h3 style={{ marginRight: "144px" }}>HAIR TYPE:</h3>
                <ul>
                  <li>
                    <label>
                      <input
                        onClick={() => setHairtype("human")}
                        type="radio"
                        name="texture"
                        value={"HUMAN HAIR"}
                      />
                      <span>HUMAN HAIR</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        onClick={() => setHairtype("synthetic")}
                        type="radio"
                        name="texture"
                        value={"SYNTHETIC HAIR"}
                      />
                      <span>SYNTHETIC HAIR</span>
                    </label>
                  </li>
                </ul>
              </div>

              {hairtype === "human" ? (
                <>
                  <div className={styles.flex}>
                    <h3 style={{ marginRight: "109px" }}>HAIR TEXTURE:</h3>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="texture"
                            value="LOOSE WAVE"
                          />
                          <span>LOOSE WAVE</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="texture"
                            value="DEEP WAVE"
                          />
                          <span>DEEP WAVE</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.flex}>
                    <h3 style={{ marginRight: "70px" }}>BUNDLE QUANTITY:</h3>
                    <ul>
                      <li>
                        <label>
                          <input type="radio" name="bundle" value="2 BUNDLES" />
                          <span>2 BUNDLES</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="bundle" value="3 BUNDLES" />
                          <span>3 BUNDLES</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="bundle" value="3+" />
                          <span>3+</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}

              <div className={styles.flex}>
                <h3 style={{ marginRight: "40px" }}>HAIR LENGTH (INCHES):</h3>
                <ul style={{ maxWidth: "450px" }}>
                  <li>
                    <label>
                      <input type="radio" name="length" value="16”" />
                      <span>16”</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="length" value="18”" />
                      <span>18”</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="length" value="20”" />
                      <span>20”</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="length" value="22”" />
                      <span>22”</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="length" value="24”" />
                      <span>24”</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className={styles.flex}>
                <h3 style={{ marginRight: "144px" }}>QUANTITY:</h3>
                <select>
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.amount}>
            <h3>TOTAL AMOUNT: </h3>
            <p>$324.00</p>
          </div>
        </div>
      </div>

      <div>
        <Link to="">
          <button> GO TO CHECKOUT</button>
        </Link>

        <button>ADD TO CART</button>
      </div>

      <div>
        <h3>DESCRIPTION</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat
          sed arcu cursus auctor et quis lacus. Integer arcu odio, blandit nec
          cursus et, finibus quis ipsum. Vestibulum mauris odio, euismod id sem
          mattis, vestibulum luctus diam. Donec ut dui tellus. Curabitur
          dignissim condimentum purus eu consequat. Pellentesque molestie
          vulputate nulla, eu vestibulum elit ornare a.
        </p>

        <h3>ADDITIONAL INFORMATION</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat
          sed arcu cursus auctor et quis lacus. Integer arcu odio, blandit nec
          cursus et, finibus quis ipsum. Vestibulum mauris odio, euismod id sem
          mattis, vestibulum luctus diam. Donec ut dui tellus. Curabitur
          dignissim condimentum purus eu consequat. Pellentesque molestie
          vulputate nulla, eu vestibulum elit ornare a.
        </p>
      </div>
    </div>
  );
}
export default Details;
