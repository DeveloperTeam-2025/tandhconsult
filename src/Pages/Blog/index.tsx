
import classNames from 'classnames';
import styles from './style.module.scss'; 
import ReactPaginate from 'react-paginate';
import static_value from './card.json'
const Index = () => {
  const handlePageClick = () =>{
    console.log('success')
  }
  
  return (
    <section className={styles.blogs} id="blogs">
      <div className={styles.container}>
        <h1 className={classNames(styles.title, styles.blogs__title, 'wow', 'animate_animated','animate__fadeInLeft')}>
          <span>Blog</span>
        </h1>
        <div className={classNames(styles.blogs__tags, 'wow', 'animate_animated','animate__fadeInUp')}>
          <div className={styles.post_tags}></div>
        </div>

        <div className={classNames(styles.blogs__wrapper, 'wow-delay')}>
          {
            static_value[0].map((data)=>{
              return(
                <>
                  <div className={classNames(styles.blogs__item, 'wow', 'animate_animated','animate__fadeInUp')}>
                    <picture className={styles.blogs__pic}>
                      <a >
                        <img
                          src={data.img}
                          alt="data"
                        />
                      </a>
                    </picture>
                    <div className={styles.blogs__content}>
                      <span className={styles.blogs__date}>{data.date}</span>
                      <a  className={styles.blogs__name}  >
                        {data.name}
                      </a>
                      <p className={styles.blogs__desc}>
                        {data.desc}
                      </p>
                    </div>
                  </div>
                  {
                   data && data.content.map((val, idx)=>{
                    return(
                      <>
                        <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
                          <picture className={styles.blogs__pic}>
                            <a>
                              <img
                                src={val.img}
                                alt={idx.toString()}
                              />
                            </a>
                          </picture>
                          <div className={styles.blogs__content}>
                            <span className={styles.blogs__date}>{val.date}</span>
                            <a
                              className={styles.blogs__name}
                              
                            >
                              {val.name}
                            </a>
                            <p className={styles.blogs__desc}>
                              {val.desc}
                            </p>
                          </div>
                        </div>
                      </>
                    )
                   })
                  }
                </>
              )
            })
          }
        </div>
        <ReactPaginate
          previousLabel={'«'}
          nextLabel={'»'}
          breakLabel={'...'}
          pageCount={8}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={classNames(styles.pagination, 'wow', 'animate_animated','animate__fadeInUp')}
          pageClassName={styles.page_item}
          pageLinkClassName={'page-link'}
          previousClassName={styles.prev_item}
          nextClassName={styles.next_item}
          activeClassName={styles.active}
        />
      </div>
    </section>
  );
};

export default Index;
