import styles from './style.module.scss'
import classNames from 'classnames'
const index = () => {

  return (
    <div className={styles.footer_part}>
        <div className={styles.footer_container}>
            <div className={styles.inner_footer}>
                <div className=' wow animate__animated animate__fadeInUp'>
                    <a className={styles.footer_logo} href="/">
                        <img src="https://tandhconsult.com/wp-content/uploads/2021/05/logo-black.png" alt="icon" />
                    </a>
                    <div className={styles.footer_text}>
                        <p>Helping you prove the facts and turning it into an <br/> obtainable outcome</p>
                    </div>
                    <div className={styles.footer_soc}>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F30123626%2F" className={styles.footer_socItem}><i className={styles.linkedIn_Icon}></i></a>
                        <a href="https://www.instagram.com/tandhconsult/" className={styles.footer_socItem}><i className={styles.insta_Icon}></i></a>
                        <a href="https://www.facebook.com/tandhconsult/" className={styles.footer_socItem}><i className={styles.facebook_Icon}></i></a>
                        <a href="https://t.me/thconsult_news" className={styles.footer_socItem}><i className={styles.telegram_Icon}></i></a>
                        <a href="https://t.me/thconsult_news" className={styles.footer_socItem}><i className={styles.viber_Icon}></i></a>
                    </div>
                </div>
                <div className={classNames(styles.add_foot,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>Menu</span>
                    <ul>
                        <li className={styles.list_Footer}><a href="/">Home</a></li>
                        <li className={styles.list_Footer}><a href="/partners">Partners</a></li>
                        <li className={styles.list_Footer}><a href="/category/blog">Blog</a></li>
                        <li className={styles.list_Footer}><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className={classNames(styles.add_foot,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>About Us</span>
                    <ul>
                        <li className={styles.list_Footer}><a href="/terms-and-conditions">Terms and Condition</a></li>
                        <li className={styles.list_Footer}><a href="/privacy-policy">Privacy Policy</a></li>
                        <li className={styles.list_Footer}><a href="/our-team">Our Team</a></li>
                        <li className={styles.list_Footer}><a href="/our-certificates">Certificates</a></li>
                    </ul>
                </div>
                <div className={classNames(styles.add_foot,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>Solutions</span>
                    <ul>
                        <li className={styles.list_Footer}><a href="/solutions/investigations-and-disputes">Investigations and Disputes</a></li>
                        <li className={styles.list_Footer}><a href="/solutions/consulting-and-documental-support">Consulting and Documental Support</a></li>
                        <li className={styles.list_Footer}><a href="/solutions/business-services">Business Services</a></li>
                        <li className={styles.list_Footer}><a href="/solutions/cryptocurrency-investigation-and-compliance">Cryptocurrency Investigation and Compliance</a></li>
                    </ul>
                </div>
                <div className={classNames(styles.footer__col__contacts,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>Contact Us</span>
                    <div>
                        <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.phone_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>+3619010272</a></p></div>
                        <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.email_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>info@tandhconsult.com</a></p></div>
                        <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.pin_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>Headquarters: 1052, Vármegye u. 3-5, 2nd floor, Budapest</a></p></div>
                    </div>
                </div>
                <div className='wow animate__animated animate__fadeInUp'>
                    <span className={styles.footer_title}>Business Hours</span>
                    <ul>
                        <li className={styles.list_Footer}><p >Monday-Friday: 9am to 6pm (CET)</p></li>
                        <li className={styles.list_Footer}><p >Saturday: By Appointment</p></li>
                        <li className={styles.list_Footer}><p >Sunday: Closed</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.footer_bottom}>
            <div className={styles.footer_container}>
                <div className={styles.copyr}>
                <h4>© 2019 – 2024 T&amp;H Consulting – All Rights Reserved.<br/>
                T&amp;H Consulting International Kft | Registration number –<a href="https://www.nemzeticegtar.hu/nemzeticegtar/cegadat/0109350838/TH-Consulting-International-Kft"> 01-09-350838</a> | VAT No. HU27125508</h4>
                <h4>Disclaimer: Please note that T&amp;H Consulting offers a free consultation to all new clients, but any services that will be commissioned subsequently will incur fees and/or commissions. The fees and commissions will vary based on the specific services requested, as well as the complexity of each individual case. T&amp;H Consulting does not offer any investments, financial services, or advice.</h4>
                <h4>T&amp;H Consulting International KFT does not provide services to residents of England and Wales.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index
