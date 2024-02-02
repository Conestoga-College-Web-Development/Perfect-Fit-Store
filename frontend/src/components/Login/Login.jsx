import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Login.module.css";
import Logo from "./logo.png";

const Login = () => {
  return (
    <React.Fragment>
      <nav>
        <img src={Logo} className={styles.logo} alt="" srcset="" />
        <div className={styles.links}>
          <button className={styles.Login}>Login</button>
          <FaShoppingCart size={28} />
        </div>
      </nav>
      <section className={styles.page}>
        <h1>Login</h1>
        <input
          type="text"
          className={styles.field}
          placeholder="Email Address"
        />
        <input type="text" className={styles.field} placeholder="Password" />
        <button className={styles.continueBtn}>Continue</button>
        <div>
          <span>
            Create an account?
            <a className={styles.text} href="/">
              Click here
            </a>
          </span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>By continuing, I agree to the terms and privacy policy.</span>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Login;
