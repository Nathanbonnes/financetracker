import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'


import React from 'react';

export default function Navbar() {



  return (
  <nav className={styles.navbar}>
      <ul>
        <li classsName={styles.title}>
            MyMoney
        </li>

        <li> <Link to="/login"> Login</Link></li>
        <li> <Link to="/signup"> Signup</Link></li>

      </ul>





  </nav>);
}