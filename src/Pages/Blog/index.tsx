import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss'; 
import { useParams } from 'react-router-dom';

const Index = () => {
  const {categoryName} = useParams()
  console.log(categoryName, 'categoryName')
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
          <div className={classNames(styles.blogs__item, 'wow', 'animate_animated','animate__fadeInUp')}>
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/why-you-shouldnt-face-banks-alone-the-importance-of-professional-help-in-scam-cases/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/we-can-help-2023-11-27-05-10-56-utc-1-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>October 3, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/why-you-shouldnt-face-banks-alone-the-importance-of-professional-help-in-scam-cases/"
              >
                Why You Shouldn’t Face Banks Alone: The Importance of Professional Help in Scams
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Cristian Sepulveda, part of the team at T&H Consulting, offers valuable
                guidance on Why You Shouldn't Face Banks Alone and The Importance of Professional...
              </p>
            </div>
          </div>



          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/common-ticket-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>September 27, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/common-ticket-scams/"
              >
                Common Ticket Scams – What You Need to Know and How to Protect Yourself
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Hasan Muhandes, part of the team at T&H Consulting, provides professional
                insight on identifying and avoiding Common Ticket Scams Why Are Ticket Scams Increasing?...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/common-ticket-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>September 27, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/common-ticket-scams/"
              >
                Common Ticket Scams – What You Need to Know and How to Protect Yourself
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Hasan Muhandes, part of the team at T&H Consulting, provides professional
                insight on identifying and avoiding Common Ticket Scams Why Are Ticket Scams Increasing?...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/common-ticket-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>September 27, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/common-ticket-scams/"
              >
                Common Ticket Scams – What You Need to Know and How to Protect Yourself
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Hasan Muhandes, part of the team at T&H Consulting, provides professional
                insight on identifying and avoiding Common Ticket Scams Why Are Ticket Scams Increasing?...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/common-ticket-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>September 27, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/common-ticket-scams/"
              >
                Common Ticket Scams – What You Need to Know and How to Protect Yourself
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Hasan Muhandes, part of the team at T&H Consulting, provides professional
                insight on identifying and avoiding Common Ticket Scams Why Are Ticket Scams Increasing?...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/common-ticket-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>September 27, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/common-ticket-scams/"
              >
                Common Ticket Scams – What You Need to Know and How to Protect Yourself
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Hasan Muhandes, part of the team at T&H Consulting, provides professional
                insight on identifying and avoiding Common Ticket Scams Why Are Ticket Scams Increasing?...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/common-ticket-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/09/shocked-businesswoman-with-credit-card-looking-at-2024-03-21-21-17-22-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>September 27, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/common-ticket-scams/"
              >
                Common Ticket Scams – What You Need to Know and How to Protect Yourself
              </a>
              <p className={styles.blogs__desc}>
                Senior Consultant Hasan Muhandes, part of the team at T&H Consulting, provides professional
                insight on identifying and avoiding Common Ticket Scams Why Are Ticket Scams Increasing?...
              </p>
            </div>
          </div>



          <div className={classNames(styles.blogs__item, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/facebook-marketplace-scams/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2024/03/66b85120-3b5f-46a4-a55d-0acc2ffe3f61.webp"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>March 7, 2024</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/facebook-marketplace-scams/"
              >
                Surviving Scams on Facebook Marketplace
              </a>
              <p className={styles.blogs__desc}>
                A Guide to Avoiding Facebook Marketplace Scams What is Facebook Marketplace? Facebook
                Marketplace, a dynamic online platform by Facebook, revolutionizes how we engage in buying,...
              </p>
            </div>
          </div>


          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/report-scam-in-new-zealand/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2023/09/stack-of-coins-money-with-new-zealand-flag-financ-2023-08-01-02-57-26-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>August 14, 2023</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/report-scam-in-new-zealand/"
              >
                How to Report a Scam in New Zealand
              </a>
              <p className={styles.blogs__desc}>
                In New Zealand, a country celebrated for its breathtaking landscapes and welcoming
                communities, the well-being of its inhabitants is a top priority. As the digital...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/report-scam-in-new-zealand/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2023/09/stack-of-coins-money-with-new-zealand-flag-financ-2023-08-01-02-57-26-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>August 14, 2023</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/report-scam-in-new-zealand/"
              >
                How to Report a Scam in New Zealand
              </a>
              <p className={styles.blogs__desc}>
                In New Zealand, a country celebrated for its breathtaking landscapes and welcoming
                communities, the well-being of its inhabitants is a top priority. As the digital...
              </p>
            </div>
          </div>
          <div className={classNames(styles.blogs__item2, 'wow', 'animate_animated','animate__fadeInUp')} >
            <picture className={styles.blogs__pic}>
              <a href="https://tandhconsult.com/blog/report-scam-in-new-zealand/">
                <img
                  src="https://tandhconsult.com/wp-content/uploads/2023/09/stack-of-coins-money-with-new-zealand-flag-financ-2023-08-01-02-57-26-utc-scaled.jpg"
                  alt=""
                />
              </a>
            </picture>
            <div className={styles.blogs__content}>
              <span className={styles.blogs__date}>August 14, 2023</span>
              <a
                className={styles.blogs__name}
                href="https://tandhconsult.com/blog/report-scam-in-new-zealand/"
              >
                How to Report a Scam in New Zealand
              </a>
              <p className={styles.blogs__desc}>
                In New Zealand, a country celebrated for its breathtaking landscapes and welcoming
                communities, the well-being of its inhabitants is a top priority. As the digital...
              </p>
            </div>
          </div>


        </div>
        

        <div className={classNames(styles.pagination, 'wow', 'animate_animated','animate__fadeInUp')} >
          <div className={styles.navigation}>
            <ol className={classNames(styles.wpPaginate, 'wpp-modern-grey', 'font-inherit')}>
              <li><span className={styles.page + ' ' + styles.current}>1</span></li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/2/"
                  title="2"
                  aria-label="Go to page 2"
                  className={styles.page}
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/3/"
                  title="3"
                  aria-label="Go to page 3"
                  className={styles.page}
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/4/"
                  title="4"
                  aria-label="Go to page 4"
                  className={styles.page}
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/5/"
                  title="5"
                  aria-label="Go to page 5"
                  className={styles.page}
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/6/"
                  title="6"
                  aria-label="Go to page 6"
                  className={styles.page}
                >
                  6
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/7/"
                  title="7"
                  aria-label="Go to page 7"
                  className={styles.page}
                >
                  7
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/8/"
                  title="8"
                  aria-label="Go to page 8"
                  className={styles.page}
                >
                  8
                </a>
              </li>
              <li>
                <a
                  href="https://tandhconsult.com/category/blog/page/2"
                  className={styles.next}
                  aria-label="Go to next page"
                >
                  »
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
