import styles from './style.module.scss'
import ImageBox from '../../Components/Reusable/ImageBox/index'
import classNames from 'classnames'
const index = () => {
  // const pathname = window.location.pathname.replace('/', '')
  return (
    <>
    <section className={styles.banner_solution}>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.title_solution} wow  animate__fadeInLeft animate__animated`)}>
            <span>Solutions</span>            
          </h2>
          <div className={styles.solution_wrapper}>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image="/img/Digital_Products.jpg" href='/solutions/digital-products' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}}  name="Digital Products" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image="./img/Cryptocurrency.jpg" href='/solutions/cryptocurrency-investigation-and-compliance' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Cryptocurrency Investigation and Compliance" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image="./img/Investigation_dispute.jpg" href='/solutions/investigations-and-disputes' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Investigations and Disputes" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image="./img/Consulting_Documental.jpg" href='/solutions/consulting-and-documental-support' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Consulting and Documental Support" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image="./img/Business_services.jpg" href='/solutions/business-services' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Business Services" size="100%" more={true}/>
                </div>
            </div>
        </div>
        {/* {
          pathname !== 'solutions' &&
          <div className={classNames(`${styles.more_details} wow  animate__fadeInUp animate__animated`)}>
          <a href="/solutions" className={styles.moreLink}>
              <span>More details</span>
               <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H30M30 7L24.0625 1M30 7L24.0625 13" stroke="url(#paint0_linear)" strokeWidth="2"/>
              <defs>
              <linearGradient id="paint0_linear" x1="-1.18601e-07" y1="7.85714" x2="30" y2="7.85714" gradientUnits="userSpaceOnUse">
              <stop stopColor="#012555"/>
              <stop offset="1" stopColor="#012555"/>
              </linearGradient>
              </defs>
              </svg> 
          </a>
        </div>
        } */}
      </section>
    </>
  )
}

export default index
