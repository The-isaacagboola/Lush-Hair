import { PersonCircle, Handbag } from "react-bootstrap-icons";
import logo from "../assets/logo.svg";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="">
          <img className={styles.navLogo} src={logo} alt="Site Logo" />
        </a>

        <ul>
          <li>
            <a href="">LUSH EXTENSIONS</a>
          </li>
          <li>
            <a href="">WIGS</a>
          </li>
          <li>
            <a href="">FRONTALS & CLOSURES</a>
          </li>
          <li>
            <a href="">HAIRCARE</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div>
        <select name="currency" id="currency">
          <option value="USD">{"USD ($)"}</option>
          <option value="NGN">{"NGN (#)"}</option>
          <option value="EURO">{"EURO (£)"}</option>
        </select>
        <a href="">
          {" "}
          <PersonCircle size={24} />{" "}
        </a>
        <a href="">
          {" "}
          <Handbag size={24} />{" "}
        </a>
      </div>
    </nav>
  );
}
export default Nav;
