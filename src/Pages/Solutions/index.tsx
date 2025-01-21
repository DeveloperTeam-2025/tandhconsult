import styles from './style.module.scss'
import ImageBox from '../../Components/Reusable/ImageBox/index'
import classNames from 'classnames'
const index = () => {
  const pathname = window.location.pathname.replace('/', '')
  return (
    <>
    <section className={styles.banner_solution}>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.title_solution} wow  animate__fadeInLeft animate__animated`)}>
            <span>Solutions</span>            
          </h2>
          <div className={styles.solution_wrapper}>
                <ImageBox image="/img/Digital_Products.jpg" href='/solutions/digital-products' name="Digital Products" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="./img/Cryptocurrency.jpg" name="Cryptocurrency Investigation and Compliance" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="./img/Investigation_dispute.jpg" href='/solutions/investigations-and-disputes' name="Investigations and Disputes" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="./img/Consulting_Documental.jpg" href='/solutions/consulting-and-documental-support' name="Consulting and Documental Support" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="./img/Business_services.jpg" href='/solutions/business-services' name="Business Services" size="calc(50% - 15px)" more={true}/>
            </div>
        </div>
        {
          pathname !== 'solutions' &&
          <div className={classNames(`${styles.more_details} wow  animate__fadeInUp animate__animated`)}>
          <a href="/solutions" className={styles.moreLink}>
              <span>More details</span>
               <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H30M30 7L24.0625 1M30 7L24.0625 13" stroke="url(#paint0_linear)" stroke-width="2"/>
              <defs>
              <linearGradient id="paint0_linear" x1="-1.18601e-07" y1="7.85714" x2="30" y2="7.85714" gradientUnits="userSpaceOnUse">
              <stop stop-color="#012555"/>
              <stop offset="1" stop-color="#012555"/>
              </linearGradient>
              </defs>
              </svg> 
          </a>
        </div>
        }
      </section>
    </>
  )
}

export default index
