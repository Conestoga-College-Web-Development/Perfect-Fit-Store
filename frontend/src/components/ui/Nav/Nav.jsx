import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Nav.module.css';
import Logo from './perfect_logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => window.sessionStorage.setItem('token', '');
  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    setIsLoggedIn(token !== null && token !== '');
  }, [isLoggedIn]);
  return (
    <nav class='uk-navbar-container'>
      <div class='uk-container'>
        <div data-uk-navbar>
          <div class='uk-navbar-left'>
            <img src={Logo} style={{ width: '106px' }} alt='' />
          </div>
          <div class='uk-navbar-right'>
            <ul class='uk-navbar-nav'>
              <li class='uk-active'>
                <Link to='/category/Mens'>Men</Link>
              </li>
              <li class='uk-active'>
                <Link to='/category/Women'>Women</Link>
              </li>
              <li class='uk-active'>
                <Link to='/category/Kids'>Kids</Link>
              </li>
            </ul>

            <div style={{ display: 'none' }} className={styles.links}>
              {isLoggedIn ? (
                <button className={styles.Login} onClick={logout}>
                  Logout
                </button>
              ) : (
                <a href='/login'>
                  <button className={styles.Login}>Login</button>
                </a>
              )}
              <FaShoppingCart size={28} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
