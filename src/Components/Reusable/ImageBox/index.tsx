import React from 'react'
import styles from './style.module.scss'
const index = (props: any) => {
    const{ image, size, name } = props
  return (
    <a className={styles.picBox} style={{maxWidth: `${size} `}}>
      <picture className={styles.framePic}>
        <img src={image} alt="" />
      </picture>
      <span className={styles.picName}>{name}</span>
      <div className={styles.seeMore}>
            <span className={styles.postLink}>See more</span>
            <i className={styles.arrow_right}></i>
      </div>

    </a>
  )
}

export default index
