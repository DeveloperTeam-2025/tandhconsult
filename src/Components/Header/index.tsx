import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import 'animate.css';  // Import the Animate.css library
import WOW from 'wow.js';  // Import the Wow.js library
import classNames from 'classnames';
function App(props: any) {
    useEffect(() => {
        new WOW().init();
    }, []);
    const {pathname} = props
    const color = pathname ? "#000" : "#ffffff"
    const icon = pathname ? 'https://tandhconsult.com/wp-content/uploads/2021/05/logo-black.png' : 'https://tandhconsult.com/wp-content/uploads/2021/05/logo.png'
    const option = ["Terms and Conditions", "Privacy Policy", "Fraud Awareness", "Partners", "FAQ"]
    const options = !option ? [""] : option;
    const solution = [    "Investigations and Disputes",
        "Consulting and Documental Support",
        "Cryptocurrency Investigation and Compliance",
        "Business Services"]
    const solutions = !solution ? [""] : solution;
  return (
    <>
    <div className={styles.heading}>
        <div className={styles.header_part}>
            <div className={styles.header_row}>
                <a href="/" className={classNames(`${styles.header_logo} wow animate__animated animate__fadeInDown`)}>
                    <img src={icon} alt="Logo"  />
                </a>
                <div className={styles.header_inner}>
                    <header className="App-header">
                        <ul className="wow animate__animated animate__fadeInDown">
                            <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${color}`}} href="/">Home</a>
                            </li>
                            <li  className={ classNames(`${styles.nav_header} ${ color === "#000"? styles.arrow2 : styles.arrow} ${styles.down}`)}>
                                <a className={styles.page} style={{color: `${color}`}} href="/about-us" >About Us</a>
                                <ul className={classNames(`absolute left-0 w-[14.5rem] left-[-5rem] top-[1.5rem] h-[auto] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 `, styles.hover)}>
                                    {options.map((option, index) => {
                                        const url = option.toLowerCase().replace(/\s+/g, '-')
                                    return(
                                        <li
                                            key={index}
                                            className={classNames(`hover:[color:#70abdc!important] cursor-pointer`, styles.btn_a)}
                                            onClick={() => {window.location.pathname = url}}
                                        >
                                            {option}
                                        </li> 
                                    )
                                    })}
                                </ul>
                            </li>
                            <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${color}`}} href="/our-team">Our Team</a>
                            </li>
                            <li  className={ classNames(`${styles.nav_header} `)}>
                                <a className={styles.page} style={{color: `${color}`}} href="/certificates">Certificate</a>
                            </li>
                            <li  className={classNames(`${styles.nav_header} ${ color === "#000"? styles.arrow2 : styles.arrow} ${styles.down}`)}>
                                <a className={styles.page} style={{color: `${color}`}} href='/solutions'>Solutions</a>
                                <ul className={classNames(`absolute left-0 w-[26rem] left-[-10.5rem] top-[1.5rem] h-[auto] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 `, styles.hover)}>
                                    {solutions.map((option, index) => {
                                    const url = option.toLowerCase().replace(/\s+/g, '-')
                                    return(
                                    <li
                                        key={index}
                                        className={classNames(`hover:[color:#70abdc!important] cursor-pointer`, styles.btn_a)}
                                        onClick={() => {window.location.pathname = `product-category/${url}`}}
                                    >
                                        {option}
                                    </li>
                                    )})}
                                </ul>
                            </li>
                            <li  className={ classNames(`${styles.nav_header}`)}>
                                <a className={styles.page} style={{color: `${color}`}} href="/category/blog">Blog</a>
                            </li>
                            <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${color}`}} href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </header>
                    <div className={classNames(`${styles.controls} wow animate__animated animate__fadeInRight`)}>
                        <a href="" style={{width: "12rem"}}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </a>
                        <span className={styles.header__controlls_separate} style={{backgroundColor:`${color === "#000" ? '#7c7c7c': '' }`}}/>
                        <a href="" style={{width: "12rem"}}>
                            <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.23737 2.28845C1.84442 2.15746 1.41968 2.36983 1.28869 2.76279C1.15771 3.15575 1.37008 3.58049 1.76303 3.71147L2.02794 3.79978C2.70435 4.02524 3.15155 4.17551 3.481 4.32877C3.79296 4.47389 3.92784 4.59069 4.01426 4.71059C4.10068 4.83049 4.16883 4.99538 4.20785 5.33722C4.24907 5.69823 4.2502 6.17 4.2502 6.883L4.2502 9.55484C4.25018 10.9224 4.25017 12.0247 4.36673 12.8917C4.48774 13.7918 4.74664 14.5497 5.34855 15.1516C5.95047 15.7535 6.70834 16.0124 7.60845 16.1334C8.47542 16.25 9.57773 16.25 10.9453 16.25H18.0002C18.4144 16.25 18.7502 15.9142 18.7502 15.5C18.7502 15.0857 18.4144 14.75 18.0002 14.75H11.0002C9.56479 14.75 8.56367 14.7484 7.80832 14.6468C7.07455 14.5482 6.68598 14.3677 6.40921 14.091C6.17403 13.8558 6.00839 13.5398 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7522C18.2128 12.5045 18.4017 12.0636 18.7797 11.1817L19.2082 10.1817C20.0177 8.2929 20.4225 7.34849 19.9779 6.67422C19.5333 5.99996 18.5058 5.99996 16.4508 5.99996H5.74526C5.73936 5.69227 5.72644 5.41467 5.69817 5.16708C5.64282 4.68226 5.52222 4.2374 5.23112 3.83352C4.94002 3.42965 4.55613 3.17456 4.1137 2.96873C3.69746 2.7751 3.16814 2.59868 2.54176 2.38991L2.23737 2.28845Z" ></path> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" ></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" ></path> </g></svg>
                        </a>
                        <span className={styles.header__controlls_separate} style={{backgroundColor:`${color === "#000" ? '#7c7c7c': '' }`}}/>
                        <a href="" style={{width: "12rem"}}>
                            <svg fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
                        </a>
                        <span className={styles.txtlogin} style={{color:`${color}`}}>LOGIN</span>
                    </div>
                    <a href="http://" className={classNames(`${styles.btn_quote} wow animate__animated animate__fadeInRight`)}>
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
