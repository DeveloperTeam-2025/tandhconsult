
import classNames from 'classnames';
import styles from './style.module.scss'
import { useParams } from 'react-router-dom';
import ShadowDOM from 'react-shadow';
import Slider from "react-slick";
interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  // Define the custom arrows as separate components with types
  export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button className="related__arrow sss related__arrow--prev slick-arrow" onClick={onClick}>
        <i className="i i-arrow-right"></i>
      </button>
    );
  };
  
  export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button className="related__arrow sss related__arrow--next slick-arrow" onClick={onClick}>
        <i className="i i-arrow-right"></i>
      </button>
    );
  };
const index = () => {
    const { id } = useParams();
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
      };
  return (
        <>
            {
                id === '10-signs-to-spot-a-love-scam-checklist' ?

                <>
                    <ShadowDOM.div>
                    <style>
                        {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
                    </style>
                    <section className="card" id="card">
                    <div className="container">
                        <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                        <span>10 Signs to Spot a Love Scam Checklist</span>
                        </h1>
                        <div className="card__row">
                        <picture className="card__pic wow animate__animated animate__fadeInUp">
                            <img src="https://tandhconsult.com/wp-content/uploads/2024/06/th-each-product-768x432.png" alt="" />
                        </picture>
                        <div className="card__right wow animate__animated animate__fadeInRight">
                            <p>
                            This comprehensive checklist is designed to assist individuals in identifying the various signs and indicators commonly associated with romance scams, thereby enhancing their ability to protect themselves from such fraudulent activities.
                            </p>
                            <div className="card__ctrl">
                            <a
                                href="?add-to-cart=29424"
                                aria-describedby="woocommerce_loop_add_to_cart_link_describedby_29424"
                                data-quantity="1"
                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                data-product_id="29424"
                                data-product_sku=""
                                aria-label="Add to cart: “10 Signs to Spot a Love Scam Checklist”"
                                rel="nofollow"
                                data-success_message="“10 Signs to Spot a Love Scam Checklist” has been added to your cart"
                            >
                                Add to cart
                            </a>
                            <span id="woocommerce_loop_add_to_cart_link_describedby_29424" className="screen-reader-text"></span>
                            <span className="card__price">
                                <span className="price">
                                <del aria-hidden="true">
                                    <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                        <span className="woocommerce-Price-currencySymbol">£</span>9.99
                                    </bdi>
                                    </span>
                                </del>
                                <span className="screen-reader-text">Original price was: £9.99.</span>
                                <ins aria-hidden="true">
                                    <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                        <span className="woocommerce-Price-currencySymbol">£</span>0.99
                                    </bdi>
                                    </span>
                                </ins>
                                <span className="screen-reader-text">Current price is: £0.99.</span>
                                </span>
                            </span>
                            </div>
                        </div>
                        </div>

                        <div className="card__desc wow animate__animated animate__fadeInUp">
                        <p>
                            Stay safe in the digital dating world with our “10 Signs to Spot a Love Scam Checklist.” This comprehensive 5-page guide helps you recognize the warning signs of romance scams, providing practical tips and real-world examples. Whether you’re an online dater, concerned family member, or educator, this checklist equips you with the knowledge to protect yourself and your loved ones from deceitful predators. Learn to identify common scam tactics and take proactive steps to secure your personal information and finances. Download now and ensure your online interactions remain safe and genuine.
                        </p>
                        <figure id="attachment_29426" aria-describedby="caption-attachment-29426" className="wp-caption alignnone">
                            <img
                            decoding="async"
                            className="size-medium wp-image-29426"
                            src="https://tandhconsult.com/wp-content/uploads/2024/06/for-workbooks-300x300.png"
                            alt="10 Signs to Spot a Love Scam Checklist"
                            width="300"
                            height="300"
                            sizes="(max-width: 300px) 100vw, 300px"
                            />
                            <figcaption id="caption-attachment-29426" className="wp-caption-text">
                            10 Signs to Spot a Love Scam Checklist
                            </figcaption>
                        </figure>
                        </div>
                    </div>
                    </section>
                    </ShadowDOM.div>
                </>
                :
                id === 'how-not-to-get-scammed-a-guide-to-protecting-yourself-online' ?
                <>
                    <ShadowDOM.div>
                    <style>
                        {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
                    </style>
                    <section className="card" id="card">
                        <div className="container">
                            <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                            <span>How Not to Get Scammed: A Guide to Protecting Yourself Online</span>
                            </h1>
                            <div className="card__row">
                            <picture className="card__pic wow animate__animated animate__fadeInUp">
                                <img
                                src="https://tandhconsult.com/wp-content/uploads/2024/05/th-each-product-768x432.png"
                                alt=""
                                />
                            </picture>
                            <div className="card__right wow animate__animated animate__fadeInRight">
                                <p>
                                A comprehensive guide offering practical tips and strategies to
                                protect yourself from online scams. Ideal for enhancing your scam
                                awareness and online security.
                                </p>
                                <div className="card__ctrl">
                                <a
                                    href="?add-to-cart=29407"
                                    aria-describedby="woocommerce_loop_add_to_cart_link_describedby_29407"
                                    data-quantity="1"
                                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="29407"
                                    data-product_sku=""
                                    aria-label="Add to cart: “How Not to Get Scammed: A Guide to Protecting Yourself Online”"
                                    rel="nofollow"
                                    data-success_message="“How Not to Get Scammed: A Guide to Protecting Yourself Online” has been added to your cart"
                                >
                                    Add to cart
                                </a>
                                <span
                                    id="woocommerce_loop_add_to_cart_link_describedby_29407"
                                    className="screen-reader-text"
                                ></span>
                                <span className="card__price">
                                    <span className="price">
                                    <del aria-hidden="true">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">£</span>
                                            19.00
                                        </bdi>
                                        </span>
                                    </del>
                                    <span className="screen-reader-text">Original price was: £19.00.</span>
                                    <ins aria-hidden="true">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">£</span>
                                            8.99
                                        </bdi>
                                        </span>
                                    </ins>
                                    <span className="screen-reader-text">Current price is: £8.99.</span>
                                    </span>
                                </span>
                                </div>
                            </div>
                            </div>

                            <div className="card__desc wow animate__animated animate__fadeInUp">
                            <p>
                                Introducing “How Not to Get Scammed: A Guide to Protecting Yourself
                                Online,” your ultimate resource for fraud prevention. This 25-page guide
                                provides practical tips and strategies to help you recognize and avoid
                                various online scams. With detailed chapters on identifying scams,
                                protecting personal information, and reporting fraudulent activities,
                                this guide equips you with the knowledge to stay safe online. Learn about
                                phishing, tech support scams, investment frauds, and more, while
                                implementing effective security measures to safeguard your digital life.
                            </p>
                            <figure
                                id="attachment_29410"
                                aria-describedby="caption-attachment-29410"
                                style={{ width: "300px" }}
                                className="wp-caption alignnone"
                            >
                                <img
                                className="size-medium wp-image-29410"
                                src="https://tandhconsult.com/wp-content/uploads/2024/05/for-workbooks-300x300.png"
                                alt="How Not to Get Scammed: A Guide to Protecting Yourself Online"
                                width="300"
                                height="300"
                                sizes="(max-width: 300px) 100vw, 300px"
                                />
                                <figcaption id="caption-attachment-29410" className="wp-caption-text">
                                How Not to Get Scammed: A Guide to Protecting Yourself Online
                                </figcaption>
                            </figure>
                            </div>
                        </div>
                    </section>
                    </ShadowDOM.div>
                </>
                :
                id === 'fraud-awareness-printable-workbook-with-exercises' ?
                <>
                    <ShadowDOM.div>
                    <style>
                        {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
                    </style>
                    <section className="card" id="card">
                        <div className="container">
                            <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                            <span>Printable Workbook with Exercises – Fraud Awareness</span>
                            </h1>
                            <div className="card__row">
                            <picture className="card__pic wow animate__animated animate__fadeInUp">
                                <img
                                src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-printable-workbook-768x432.png"
                                alt=""
                                />
                            </picture>
                            <div className="card__right wow animate__animated animate__fadeInRight">
                                <p>
                                Enhance your fraud prevention skills with our Fraud Awareness Workbook. This comprehensive printable guide includes self-assessments, interactive exercises, and essential resources to help you identify and protect against scams. Perfect for boosting your online security and staying vigilant against fraud.
                                </p>
                                <div className="card__ctrl">
                                <a
                                    href="?add-to-cart=29402"
                                    aria-describedby="woocommerce_loop_add_to_cart_link_describedby_29402"
                                    data-quantity="1"
                                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="29402"
                                    data-product_sku=""
                                    aria-label="Add to cart: “Printable Workbook with Exercises - Fraud Awareness”"
                                    rel="nofollow"
                                    data-success_message="“Printable Workbook with Exercises - Fraud Awareness” has been added to your cart"
                                >
                                    Add to cart
                                </a>
                                <span
                                    id="woocommerce_loop_add_to_cart_link_describedby_29402"
                                    className="screen-reader-text"
                                ></span>
                                <span className="card__price">
                                    <span className="price">
                                    <del aria-hidden="true">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">£</span>
                                            97.00
                                        </bdi>
                                        </span>
                                    </del>
                                    <span className="screen-reader-text">Original price was: £97.00.</span>
                                    <ins aria-hidden="true">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">£</span>
                                            49.10
                                        </bdi>
                                        </span>
                                    </ins>
                                    <span className="screen-reader-text">Current price is: £49.10.</span>
                                    </span>
                                </span>
                                </div>
                            </div>
                            </div>

                            <div className="card__desc wow animate__animated animate__fadeInUp">
                            <p>
                                Happy to present you the <strong>Fraud Awareness Workbook</strong>, your comprehensive guide to mastering fraud prevention and online security. This printable workbook is designed to enhance your scam awareness and equip you with the tools needed to protect yourself from various fraudulent activities. Whether you’re new to fraud prevention or looking to refine your skills, this workbook offers valuable insights and practical exercises to help you stay vigilant.
                            </p>
                            <p><strong>Features:</strong></p>
                            <ul>
                                <li>
                                <strong>Self-Assessments</strong>: Start and end your journey with detailed self-assessments to measure your initial understanding and track your progress in fraud awareness. These assessments provide a clear baseline and highlight areas for improvement.
                                </li>
                                <li>
                                <strong>Masterclass &amp; Presentation</strong>: Dive deep into the world of fraud prevention with our expertly crafted masterclass and comprehensive presentation materials. Learn about the latest fraud detection techniques and strategies to stay ahead of scammers.
                                </li>
                                <li>
                                <strong>Interactive Exercises</strong>: Engage in practical exercises designed to enhance your ability to identify and respond to various fraud scenarios, including phishing emails, romance scams, and investment frauds. These activities reinforce your knowledge and boost your confidence in handling real-life situations.
                                </li>
                                <li>
                                <strong>Checklists &amp; Trackers</strong>: Utilize our practical checklists and trackers to maintain and improve your security practices. These tools help you stay organized, monitor your progress, and ensure consistent vigilance against fraud.
                                </li>
                                <li>
                                <strong>Resources &amp; Materials</strong>: Access a curated collection of essential resources and educational materials to support your ongoing learning. Stay informed about the latest fraud prevention tactics and protective measures with our up-to-date resources.
                                </li>
                            </ul>
                            <p><strong>Key Benefits:</strong></p>
                            <ul>
                                <li><strong>Enhanced Fraud Awareness</strong>: Improve your understanding of common fraud tactics and learn how to recognize potential scams.</li>
                                <li><strong>Effective Security Practices</strong>: Implement advanced security measures for your online accounts and personal information.</li>
                                <li><strong>Practical Skills</strong>: Gain hands-on experience through interactive exercises that prepare you for real-life fraud scenarios.</li>
                                <li><strong>Ongoing Support</strong>: Stay informed with access to the latest fraud prevention resources and materials.</li>
                            </ul>
                            <p>
                                By completing the <strong>Fraud Awareness Workbook</strong>, you’ll develop the confidence and skills needed to safeguard yourself and your assets from potential scams. This workbook is perfect for individuals looking to improve their online security and fraud detection capabilities. Print it out, mark your progress, and take proactive steps to protect yourself from fraud with our detailed and practical guide.
                            </p>
                            <p>
                                Boost your fraud prevention capabilities today with the <strong>Fraud Awareness Workbook</strong>—your ultimate resource for scam prevention and online security.
                            </p>
                            <figure
                                id="attachment_29404"
                                aria-describedby="caption-attachment-29404"
                                style={{ width: "300px" }}
                                className="wp-caption alignnone"
                            >
                                <img
                                className="size-medium wp-image-29404"
                                src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-printable-workbook2-300x300.png"
                                alt="Fraud Awareness Printable Workbook"
                                width="300"
                                height="300"
                                data-pin-description="Fraud Awareness Printable Workbook"
                                sizes="(max-width: 300px) 100vw, 300px"
                                />
                                <figcaption id="caption-attachment-29404" className="wp-caption-text">
                                Fraud Awareness Printable Workbook
                                </figcaption>
                            </figure>
                            </div>
                        </div>
                    </section>
                    </ShadowDOM.div>
                </>
                :
                <>
                    <section id="card" className={classNames(styles.card)}>
                        <div className={classNames(styles.container)}>
                            <h1 className={classNames(styles.title, styles.card__name, 'wow', 'animate__animated', 'animate__fadeInLeft')} data-wow-delay="0.4s">
                            <span>Fraud Awareness Masterclass + Presentation</span>
                            </h1>
                            <div className={classNames(styles.card__row)}>
                            <picture className={classNames(styles.card__pic, 'wow', 'animate__animated', 'animate__fadeInUp')} data-wow-delay="0.5s">
                                <img src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-workshop_learnvent_edited-768x535.jpg" alt="" />
                            </picture>
                            <div className={classNames(styles.card__right, 'wow', 'animate__animated', 'animate__fadeInRight')} data-wow-delay="0.6s">
                                <p><strong>Unlock the Secrets to Protecting Your Finances with Our Fraud Awareness Bundle</strong></p>
                                <p>In an era dominated by digital transactions, safeguarding against financial fraud is crucial. With cybercrime damages projected to cost the global economy $10.5 trillion annually by 2025, understanding fraud prevention is more vital than ever. Our comprehensive Fraud Awareness Bundle equips you with crucial tools and knowledge through a meticulously designed, recorded Masterclass and a comprehensive presentation PDF.</p>
                                <div className={classNames(styles.card__ctrl)}>
                                <a className={classNames(styles.add_to_cart_button)} data-product_id="29378" aria-label="Add to cart: Fraud Awareness Masterclass + Presentation">Add to cart</a>
                                <span className={classNames(styles.card__price)}>
                                    <span className={classNames(styles.price)}>
                                    <del><span ><bdi><span>£</span>59.98</bdi></span></del>
                                    <ins><span ><bdi><span>£</span>29.99</bdi></span></ins>
                                    </span>
                                </span>
                                </div>
                            </div>
                            </div>

                            <div className={classNames(styles.card__desc, 'wow', 'animate__animated', 'animate__fadeInUp')}>
                            <h3>Key Features of Our Fraud Awareness Bundle</h3>
                            <p><strong>Expert-Led Workshop:</strong> Gain exclusive access to a 2-hour recorded workshop led by seasoned industry experts. Delve into essential fraud prevention strategies and learn practical methods to protect yourself and others from scams.</p>
                            <p><strong>Detailed Presentation PDF:</strong> Receive a presentation PDF that complements the workshop. This resource is perfect for following along, taking notes, and revisiting important topics at your convenience.</p>
                            
                            <div className={classNames('wp-video')}>
                                <div id="mep_0" className={classNames('mejs-container', 'mejs-video')}>
                                <video className={classNames('wp-video-shortcode')} id="video-29378-1_html5" width="640" height="360" preload="metadata" src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-workshop_teaser_1.mp4?_=1">
                                    <source type="video/mp4" src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-workshop_teaser_1.mp4?_=1" />
                                </video>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <h3>Why Choose Our Fraud Awareness Bundle?</h3>
                            <p><strong>Learn from Experts:</strong> Benefit from the expertise of professionals who bring real-world insights and highlight red flags to detect and prevent fraud.</p>
                            <p><strong>Flexible Learning Options:</strong> Study at your own pace with the ability to pause, rewind, and replay the workshop. Our bundle adapts to your schedule.</p>
                            <p><strong>Enhance Your Knowledge:</strong> Boost your understanding of various fraud types, their impacts, and effective prevention strategies.</p>
                            <p><strong>Global Perspective:</strong> Understand the global landscape of financial fraud with examples from around the world.</p>

                            <h3>Act Now and Secure Your Financial Future</h3>
                            <p>Equip yourself with the tools and knowledge to stay one step ahead of <a href="https://tandhconsult.com/blog/what-to-do-if-you-suspect-fraud/">fraudsters</a>. Purchase the Fraud Awareness Bundle today and start your journey to becoming a fraud prevention champion.</p>
                            </div>
                        </div>
                    </section>
                </>
            }
            <ShadowDOM.div>
                <style>
                    {`
                        @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        .slick-track{
                        gap: 1rem;
                        }
                    `}
                </style>
                <section className="related" id="related">
                    <div className="container">
                        <h2 className="title related__title"><span>Related products</span></h2>
                        <Slider {...settings} className="related__slider">
                            <a className="dispute__link related__link slick-slide" href="https://tandhconsult.com/solutions/consulting-documental-support/application-processing-drafting/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/07/shutterstock_1883345692-768x512.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Application Processing / Drafting</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                            <a className="dispute__link related__link slick-slide" href="https://tandhconsult.com/solutions/consulting-documental-support/compilation-case-assessment/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/07/shutterstock_2588631621-768x473.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Case Assessment &amp; Compilation Services</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                            <a className="dispute__link related__link slick-slide" href="https://tandhconsult.com/solutions/consulting-documental-support/technical-translation-non-certified/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/07/stem-t4l-ulrke7zqjpy-unsplash-768x513.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Technical translation (non-certified)</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                            <a className="dispute__link related__link slick-slide" href="https://tandhconsult.com/solutions/investigations-disputes/dispute-settlement-basic-package/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/06/beatriz-perez-moya-xn4t2pvuugk-unsplash-768x417.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Dispute Settlement “Basic Package”</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                            <a className="dispute__link related__link slick-slide" href="https://tandhconsult.com/solutions/investigations-disputes/dispute-settlement-special-package/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/06/canva-boss-dictating-to-assistant-at-office-768x439.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Dispute Settlement “Special Package”</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                            <a className="dispute__link related__link slick-slide" href="https://tandhconsult.com/solutions/investigations-disputes/dispute-settlement-optimal-package/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/06/gabrielle-henderson-hjckknwcxxq-unsplash-768x512.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Dispute Settlement “Optimal Package”</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                            <a className="dispute__link related__link slick-slide " href="https://tandhconsult.com/solutions/investigations-disputes/dispute-settlement-premium-package/">
                                <picture className="dispute__pic">
                                <img src="https://tandhconsult.com/wp-content/uploads/2021/06/romain-dancre-doplsdelx7e-unsplash.jpg" alt="" />
                                </picture>
                                <span className="dispute__name">Dispute Settlement “Premium Package”</span>
                                <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                            </a>
                        </Slider>
                    </div>
                </section>
            </ShadowDOM.div>
        </>
    )
}

export default index
