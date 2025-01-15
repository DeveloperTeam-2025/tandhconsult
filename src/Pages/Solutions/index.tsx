import styles from './style.module.scss'
import ImageBox from '../../Components/Reusable/ImageBox/index'
import classNames from 'classnames'
const index = () => {
  const pathname = window.location.pathname.replace('/', '')
  console.log(pathname)
  return (
    <>
    <section className={styles.banner_solution}>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.title_solution} wow  animate__fadeInLeft animate__animated`)}>
            <span>Solutions</span>            
          </h2>
          <div className={styles.solution_wrapper}>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2024/05/combination-lock-and-different-gadgets-2023-11-27-04-51-43-utc-scaled.jpg" href='/' name="Digital Products" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2023/06/blockchain-technology-concept-2021-08-26-15-33-00-utc-scaled.jpg" href='/product-category/cryptocurrency-investigation-and-compliance' name="Cryptocurrency Investigation and Compliance" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2023/06/group-of-businesswoman-and-accountant-checking-dat-2022-10-14-19-35-28-utc-scaled.jpg" href='/product-category/investigations-and-disputes' name="Investigations and Disputes" size="calc(50% - 15px)" more={true}/>
                <ImageBox image="https://tandhconsult.com/wp-content/uploads/2023/06/business-documents-auditor-business-asian-woman-c-2023-04-25-05-28-52-utc-scaled.jpg" href='/product-category/consulting-and-documental-support' name="Consulting and Documental Support" size="calc(50% - 15px)" more={true}/>
                <ImageBox image=" https://tandhconsult.com/wp-content/uploads/2023/06/serious-colleagues-discussing-business-project-clo-2023-05-30-11-29-23-utc-scaled.jpg" href='/product-category/business-services' name="Business Services" size="calc(50% - 15px)" more={true}/>
            </div>
        </div>
        {
          pathname !== 'solutions' &&
          <div className={classNames(`${styles.more_details} wow  animate__fadeInUp animate__animated`)}>
          <a href="/solutions" className={styles.moreLink}>
              <span>More details</span><i className={styles.arrow_right} style={{background:"#000"}}></i>
          </a>
        </div>
        }
      </section>
    </>
  )
}

export default index
