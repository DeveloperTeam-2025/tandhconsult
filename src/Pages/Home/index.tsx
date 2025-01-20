import styles from './style.module.scss'
import classNames from 'classnames'
import Button from '../../Components/Reusable/Buttons/index'
import ImageBox from '../../Components/Reusable/ImageBox/index'
import Consult from '../../Components/Reusable/Form/Consult/index'
import Solutions from '../Solutions/index'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousell from '../../Components/Reusable/Swiper'
import bg_banner from '../../assets/images/pexels-goumbik-577210.jpg'
const index = () => {


  return (
    <>
    {/* <div className={styles.chatbot}>
      <span>Chat with us</span>
    </div> */}
     <div className={styles.homepage}>
      <section className={styles.first_banner}>
        <picture className={styles.banner_bg}>
          <img src={bg_banner} alt="bg_banner" />
        </picture>
        <div className={styles.container}>
          <div className={styles.inner_banner}>
            <h1 className='wow  animate__lightSpeedInLeft animate__animated'>
              Cryptocurrency Forensics, Conflict Resolution, and Advisory Services
            </h1>
            <div className={classNames(`${styles.banner_info} wow  animate__fadeInUp animate__animated`)}>
              <h2>
                With expertise in blockchain, we provide comprehensive investigation solutions, dispute resolution, compliance guidance, and strategic consulting for both individuals and businesses operating in the cryptocurrency sector.
              </h2>
            </div>
            <Button direct='/about-us'>
              <span>About Us</span>
            </Button>
            <div className={classNames(`${styles.banner_star} wow  animate__fadeInUp animate__animated`)}>
              <span className={styles.banner_stars_text}>
                Excellent
              </span>
                <div className={styles.banner_stars_star}>
                  <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                  <i className={styles.star_shine}/>
                  </div>
                  <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                    <i className={styles.star_shine}/>
                  </div>
                  <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                    <i className={styles.star_shine}/>
                  </div>
                  <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                    <i className={styles.star_shine}/>
                  </div>
                  <div className={styles.banner_star_item}>
                    <i className={styles.star_shine}/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Solutions/>
      <section className={styles.banner_about_us}>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.title_about} wow  animate__fadeInLeft animate__animated`)}><span>About us</span></h2>
          <div className={styles.about_wrapper}>
            <picture className={classNames(`${styles.about_pic} wow  animate__zoomIn animate__animated`)}>
              <img src="https://tandhconsult.com/wp-content/uploads/2023/04/193_2020-10-31_lab5_batar_zs_ausztriahaz_08-scaled-e1681919644218.jpg" alt="about us" />
            </picture>
            <div className={classNames(`${styles.about_content} wow  animate__fadeInRight animate__animated`)}>
              <h3 className={styles.about_subtitle}> <span>In-Depth Blockchain Investigation</span> </h3>
              <div className={styles.about_info}>
                <p>Our team prepares detailed investigative reports on blockchain transactions, assisting clients in coordinating with law enforcement agencies, banks, and cryptocurrency exchanges for a seamless experience.</p>
              </div>
              <h3 className={styles.about_subtitle}> <span>Efficient Online Solutions</span></h3>
              <div className={styles.about_info}>
                <p>By leveraging digital tools, we save our clients time and money. Our focus is on delivering maximum value while minimizing unproductive activities. We’ve partnered with industry leaders to provide you with the highest quality services.</p>
              </div>
              <h3 className={styles.about_subtitle}> <span>Certified and Committed Professionals</span></h3>
              <div className={styles.about_info}>
                <p>Our team consists of talented, dedicated professionals who are eager to tackle new challenges. They deliver top-notch work to meet and exceed our clients’ expectations, constantly driving improvements in our offerings. Visit our certifications page to see our most recent achievements.</p>
              </div>
              <h3 className={styles.about_subtitle}> <span>Comprehensive Cost Breakdown</span></h3>
              <div className={styles.about_info}>
                <p>We prioritize transparency in our services. When you work with us, you’ll know exactly what factors into the cost, what you’ll receive in return, and the expected results upon implementing our recommendations.</p>
              </div>
              <h3 className={styles.about_subtitle}> <span>Knowledge Sharing and Industry Updates</span></h3>
              <div className={styles.about_info}>
                <p>Stay ahead in the industry with our curated media space, designed to keep our clients informed. We share important industry updates, maintain a blog, write articles, conduct interviews, and publish case studies. Join us in our mission to empower businesses with the latest insights and knowledge.</p>
              </div>
              {/* <a href="" className={styles.btn_gradient}>
                <span>About Us</span>
              </a> */}
              <Button direct="/about-us">
                <span>About Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.banner_digital}>
        <picture className={styles.digital_bg}>
          <img src="https://tandhconsult.com/wp-content/uploads/2021/08/image.jpg" alt="digital_bg" />
        </picture>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.digital_title} wow  animate__fadeInUp animate__animated`)}>It’s not possible to pack everything that T&H Consulting is about into one claim, but here are some facts</h2>
          <div className={styles.digital_wrapper}>
            <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
              <div className={styles.digital_icon}>
                <i className={styles.headphone_icon}/>
              </div>
              <span className={styles.digital_text}>
                From our headquarters in Budapest, and with the aid of international partners and industry experts, we serve clients worldwide.
              </span>
            </div>
            <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
              <div className={styles.digital_icon}>
                <i className={styles.triplet_star_icon}/>
              </div>
              <span className={styles.digital_text}>
                T&H Consulting is owned by its directors. All are dedicated to one mission: delivering efficiency and excellence in all areas of our work.
              </span>
            </div>
            <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
              <div className={styles.digital_icon}>
                <i className={styles.board_icon}/>
              </div>
              <span className={styles.digital_text}>
                When we start working with a business or a private client, we always carry out a transparent analysis and evaluation. After all, our aim is to provide a high level of service and achieve results.
              </span>
            </div>
            <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
              <div className={styles.digital_icon}>
                <i className={styles.PC_icon}/>
              </div>
              <span className={styles.digital_text}>
                We use the world’s most comprehensive cryptocurrency investigation softwares that links real-world entities to cryptocurrency activity.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Carousell></Carousell>
      <section className={styles.banner_solution}>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.title_solution} wow  animate__fadeInLeft animate__animated`)}>
            <span>Blog</span>            
          </h2>
          <div className={styles.solution_wrapper}>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/09/we-can-help-2023-11-27-05-10-56-utc-1-scaled.jpg" href="/category/blog/why-you-shouldnt-face-banks-alone-the-importance-of-professional-help-in-scam-cases/" name="Why You Shouldn’t Face Banks Alone: The Importance of Professional Help in Scams" size="calc(33.33333% - 20px)"></ImageBox>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg" href="/category/blog/common-ticket-scams/" name="Common Ticket Scams – What You Need to Know and How to Protect Yourself" size="calc(33.33333% - 20px)"></ImageBox>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/09/internet-security-bank-cards-and-a-key-on-keyboar-2023-11-27-05-31-14-utc-scaled.jpg" href="/category/blog/business-identity-theft/" name="Business Identity Theft – How to Identify and Respond to it" size="calc(33.33333% - 20px)"></ImageBox>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/04/mikita-karasiou-ho6abryi3ke-unsplash-scaled.jpg" href="/category/blog/how-to-report-a-scam-in-norway/" name="How to report a scam in Norway?" size="calc(33.33333% - 20px)"></ImageBox>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/04/daniel-prado-2cox4tg0tc0-unsplash-scaled.jpg" href="/category/blog/how-to-report-a-scam-in-spain/" name="How to report a Scam in Spain?" size="calc(33.33333% - 20px)"></ImageBox>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/04/es.png" href="/category/blog/estafas-de-empleo-falso/" name="Cuidado con las Estafas de Completar Tareas y Empleo Falso: Protégete del Fraude en Línea" size="calc(33.33333% - 20px)"></ImageBox>
            </div>
        </div>
        <div className={classNames(`${styles.more_details} wow  animate__fadeInUp animate__animated`)}>
          <a href="/category/blog" className={styles.moreLink}>
              <span>View all articles</span><i className={styles.arrow_right} style={{background:"#000"}}></i>
          </a>
        </div>
      </section>
      <Consult></Consult>
     </div>
    </>
  )
}

export default index
