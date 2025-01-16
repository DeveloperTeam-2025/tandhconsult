import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Form from '../Reusable/Form/Contact'
interface Modal{
    func?: () => void | undefined,
    func2?: () => void | undefined,

}
const index: React.FC<Modal>= ({func, func2}) => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setScreenHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <>
    
    <div className={styles.modal} style={{height: `${screenHeight + 10}px`}}>
      <div className={styles.modal_wrapper}>
        <span className={styles.exit} onClick={() => {func?.(), func2?.()}}>X</span>
        <div className={styles.logo}>
            <img src="https://tandhconsult.com/wp-content/uploads/2021/05/logo-black.png" alt="logo"  />
        </div>
        <div className={styles.form}>
            <Form/>            
        </div>
      </div>
    </div>
    </>
  )
}

export default index
