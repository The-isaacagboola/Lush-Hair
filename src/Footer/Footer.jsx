import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <p>Be the first to know</p>
        <p>SIGN UP TO OUR LIST</p>
      </div>

      <div className={styles.mail}>
        <label htmlFor="email">YOUR EMAIL ADDRESS</label>
        <input type="email" name="email" />

        <button>JOIN OUR NEWSLETTER</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.details}>
          <p>
            By signing up, you accept the terms of{" "}
            <a href="">LUSHLOCK’s Privacy Policy</a> and consent to receive
            LUSHLOCK’s e-mails with access to our latest collections, events and
            initiatives.
          </p>
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="">Privacy Policy</a> and
            <a href="">Terms of Service</a> apply.
          </p>
        </div>
      </div>

      <div className={styles.divide}></div>

      <div className={styles.footLinks}>
        <ul>
          <li>
            <a href="">TERMS AND CONDITIONS</a>
          </li>
          <li>
            <a href="">LEGAL</a>
          </li>
          <li>
            <a href="">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">TWITTER</a>
          </li>
          <li>
            <a href="">INSTAGRAM</a>
          </li>
          <li>
            <a href="">FACEBOOK</a>
          </li>
          <li>
            <a href="">US ($)</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
