import React from 'react'
import styles from './style.module.scss'
import classNames from 'classnames';

interface ButtonProps{
    children: React.ReactNode;
    direct: string;
}


const index: React.FC<ButtonProps> = ({children, direct}) => {
  return (
    <a className={classNames(`${styles.banner_btn} wow  animate__fadeInUp animate__animated`)} href={!direct ? 'https://google.com': direct}>{children}</a>
  )
}

export default index
