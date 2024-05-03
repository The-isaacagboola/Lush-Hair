import { Link } from "react-router-dom";
import { PersonCircle, Handbag } from "react-bootstrap-icons";
import logo from "../assets/logo.svg";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/home">
          <img className={styles.navLogo} src={logo} alt="Site Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/lushExtension"> LUSH EXTENSION</Link>
          </li>
          <li>
            <Link to="/">WIGS</Link>
          </li>
          <li>
            <Link to="/">FRONTALS & CLOSURES</Link>
          </li>
          <li>
            <Link to="/">HAIRCARE</Link>
          </li>
          <li>
            <Link to="/">CONTACT US</Link>
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
