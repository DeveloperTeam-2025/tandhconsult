import { useState,useEffect } from 'react'
import styles from './style.module.scss'
import 'animate.css';  // Import the Animate.css library
import WOW from 'wow.js';  // Import the Wow.js library
import classNames from 'classnames';
function App() {
    useEffect(() => {
        new WOW().init();
      }, []);

  return (
    <>
    {/* wow animate__fadeInDown */}
    <div className={styles.heading}>
                <div className={styles.header_part}>
            <div className={styles.header_row}>
                <a href="http://" className={classNames(`${styles.header_logo} wow animate__animated animate__fadeInDown`)}>
                    <img src="https://tandhconsult.com/wp-content/uploads/2021/05/logo.png" alt="Logo"  />
                </a>
                <div className={styles.header_inner}>
                    <header className="App-header">
                        <ul className="wow animate__animated animate__fadeInDown">
                            <li  className={styles.nav_header}>
                                <a className={styles.page} href="">Home</a>
                            </li>
                            <li  className={ classNames(`${styles.nav_header} ${styles.arrow}`)}>
                                <a className={styles.page} href="">About Us</a>
                            </li>
                            <li  className={styles.nav_header}>
                                <a className={styles.page} href="">Our Team</a>
                            </li>
                            <li  className={ classNames(`${styles.nav_header} `)}>
                                <a className={styles.page} href="">Certificate</a>
                            </li>
                            <li  className={classNames(`${styles.nav_header} ${styles.arrow}`)}>
                                <a className={styles.page} href="">Solutions</a>
                            </li>
                            <li  className={ classNames(`${styles.nav_header}`)}>
                                <a className={styles.page} href="">Blog</a>
                            </li>
                            <li  className={styles.nav_header}>
                                <a className={styles.page} href="">Contact Us</a>
                            </li>
                        </ul>
                    </header>
                    <div className={styles.controls}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span className={styles.header__controlls_separate}></span>
                        <a href="" style={{width: "100%"}}><img src="https://tandhconsult.com/wp-content/uploads/2021/05/cart.svg" alt="" /></a>
                        <span className={styles.header__controlls_separate}></span>
                        <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
                        <span className={styles.txtlogin}>LOGIN</span>
                    </div>
                    <a href="http://" className={styles.btn_quote}>
                            GET A QUOTE
                    </a>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default App
