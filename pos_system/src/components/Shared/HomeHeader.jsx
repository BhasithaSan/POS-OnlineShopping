import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from './HomeHeader.module.css'

const HomeHeader = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.primaryNavBar}>
        <img src="/logo.png" alt="logo" />{/* Adjust the path based on your project's structure */}
      </div>
      <ul className={`nav nav-tabs ${styles.secondaryNavBar}`} id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a href="/">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            
            Contact
          </button>
        </li>
        <li className="nav-item" role="presentation">
        <a href="/login">
          <button
            className="nav-link"
            id="sign-in-tab"
            data-bs-toggle="tab"
            data-bs-target="#sign-in-tab-pane"
            type="button"
            role="tab"
            aria-controls="sign-in-tab-pane"
            aria-selected="false"
          >
           Sign In
          </button>
          </a>
        </li>
        <li className="nav-item" role="presentation">
        <a href="/register">
          <button
            className="nav-link"
            id="sign-up-tab"
            data-bs-toggle="tab"
            data-bs-target="#sign-up-tab-pane"
            type="button"
            role="tab"
            aria-controls="sign-up-tab-pane"
            aria-selected="false"
          >
           Sign Up
          </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeHeader;
