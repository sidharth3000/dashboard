import React from "react";
import styles from "./Header.module.css";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ul className={styles.flex}>
          <div className={styles.flex2}>
            <li className={styles.company}>Company</li>
            <a className={styles.link} style={{ marginLeft : '50px'}}>Home</a>{" "}
            <a className={styles.activelink} href="/dashboard">Dashboard</a>
            <a className={styles.link}>Jobs</a>
            <a className={styles.link}>Message</a>
          </div>

          <li>
            <MdAccountCircle className={styles.avatar} />
          </li>
        </ul>
      </div>
      {/* <div className={styles.subheader}>
        <div className={styles.main}>Dashboard <span className={styles.sub}>| The one stop for all your details</span></div>
      </div> */}
    </div>
  );
};

export default Header;
