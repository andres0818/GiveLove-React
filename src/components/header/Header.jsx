import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <h2>
        Git<span>Love</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to='/cart'>
        Cart
        <FaShoppingCart size={20}/>
        <p>5</p>
      </Link>
  </span>
);

const Header = () => {
  return (
    <header>
         <div className={styles.header}>
          {logo}
          <nav>
            <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Contactenos
                </Link>
              </li>
            </ul>
            <div className={styles["header-right"]}>
              <span className={styles.links}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/order-history">My Orders</Link>
              </span>
              {cart}
            </div>
          </nav>
          <div className={styles["menu-icon"]}>
            {cart}
            <HiOutlineMenuAlt3 size={28} />
          </div>

         </div>
    </header>
  );
}

export default Header