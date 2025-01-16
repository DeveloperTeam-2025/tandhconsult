
import styles from './style.module.scss'
import classNames from 'classnames';

interface ButtonProps{
    children: React.ReactNode;
    direct: string;
    style?: React.CSSProperties; // Ensure style is correctly typed
}


const index: React.FC<ButtonProps> = ({children, direct, style}) => {
  return (
    <a className={classNames(`${styles.banner_btn} wow  animate__fadeInUp animate__animated`)} style={{...style}} href={!direct ? 'https://google.com': direct}>{children}</a>
  )
}

export default index
