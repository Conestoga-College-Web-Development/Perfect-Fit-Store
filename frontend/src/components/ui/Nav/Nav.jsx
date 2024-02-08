import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Nav.module.css";
import Logo from "./perfect_logo.png";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => window.sessionStorage.setItem("token", "");
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    setIsLoggedIn(token !== null && token !== "");
  }, [isLoggedIn]);
  return (
    <nav>
      <img src={Logo} className={styles.logo} alt="" />
      <div className={styles.menu}>
        <p>Shop</p>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </div>
      <div className={styles.links}>
        {isLoggedIn ? (
          <button className={styles.Login} onClick={logout}>
            Logout
          </button>
        ) : (
          <a href="/login">
            <button className={styles.Login}>Login</button>
          </a>
        )}
        <FaShoppingCart size={28} />
      </div>
    </nav>
  );
};
export default Nav;
