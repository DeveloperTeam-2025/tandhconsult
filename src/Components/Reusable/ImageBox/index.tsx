import React from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
interface Props {
  image: string;
  size?: string; // Optional because size might not always be provided
  name: string;
  more?: boolean;
  style?: React.CSSProperties; // Ensure style is correctly typed
  href?: string;
}

const index = ({ image, size, name, more, style = {}, href } : Props) => {
  return (
    <a className={classNames(`${styles.picBox} wow  animate__fadeInLeft animate__animated`)} style={{maxWidth: `${size} `, ...style}} href={href}>
      <picture className={styles.framePic}>
        <img src={image} alt="images" />
      </picture>
      <span className={styles.picName}>{name}</span>
      {
        more &&
      
        <div className={styles.seeMore}>
              <span className={styles.postLink}>See more</span>
              <i className={styles.arrow_right}></i>
        </div>
      }

    </a>
  )
}

export default index
