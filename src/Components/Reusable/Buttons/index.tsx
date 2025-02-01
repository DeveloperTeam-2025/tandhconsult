
import styles from './style.module.scss'
import classNames from 'classnames';

interface ButtonProps{
    children?: React.ReactNode;
    direct?: string;
    style?: React.CSSProperties; // Ensure style is correctly typed
    element?: string
    text?: string
}


const index: React.FC<ButtonProps> = ({children, direct, style, element, text}) => {
  return (  
    <>
    {
      element === '' ? <a className={classNames(`${styles.banner_btn} wow  animate__fadeInUp animate__animated`)} style={{...style}} href={!direct ? 'https://google.com': direct}>{children}</a> : <input className={classNames(`${styles.banner_btn} wow  animate__fadeInUp animate__animated`)} type="submit" value={text}  />
    }
    </>
  )
}

export default index
