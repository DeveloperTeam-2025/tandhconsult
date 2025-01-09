import React from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
const index = (props: any) => {
    const{ image, size, name, more } = props
  return (
    <a className={classNames(`${styles.picBox} wow  animate__fadeInLeft animate__animated`)} style={{maxWidth: `${size} `}}>
      <picture className={styles.framePic}>
        <img src={image} alt="" />
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
