/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slice/authSlice"
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';


const logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <h2>
        Give<span>L</span>ove
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to='/cart'>
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "")

const Header = () => {
  //funcion de mostrar y ocultar menú
  const [showMenu, setShowMenu] = useState(false)
  const [displayName, setdisplayName] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch()

  //Monitor currentley sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user);
        //const uid = user.uid;
        //console.log(user.displayName);
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          //console.log(uName);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
          dispatch(REMOVE_ACTIVE_USER());
        }


        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName :
            displayName,
          userID: user.uid,
        })
        );
      } else {
        setdisplayName("");
      }
    });
  }, [dispatch, displayName]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  const hideMenu = () => {
    setShowMenu(false)
  };

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully.");
      navigate("/");
    })
      .catch((error) => {
        toast.error(error.message);
      });
  }



  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav className={showMenu ? `${styles["show-nav"]}`
          : `${styles["hide-nav"]}`}>

          <div className={
            showMenu
              ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
              : `${styles["nav-wrapper"]}`
          }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={activeLink}>
                Contactenos
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>

              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>Login</NavLink>
              </ShowOnLogout>

              <ShowOnLogin>
                <a href="#home" style ={{color:"#ff7722"}}><FaUserCircle size={16} />Hola, {displayName}</a>
              </ShowOnLogin>

              <ShowOnLogin>
                <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>
              </ShowOnLogin>

              <ShowOnLogin>
                <NavLink to="/" onClick={logoutUser}>Logout</NavLink>
              </ShowOnLogin>

            </span>
            {cart}
          </div>

        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>

      </div>
    </header>
  );
}

export default Header