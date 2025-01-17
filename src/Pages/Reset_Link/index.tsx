import classNames from 'classnames';
import styles from './style.module.scss';

const index = () => {
  return (
    <>
      <section className={classNames(styles.privacy)} id="privacy">
        <div className={classNames(styles.container)}>
          <h1 className={classNames(styles.title, styles.privacy__title)}>
            <span>My account</span>
          </h1>
            <div className={classNames(styles.privacy__block)}>
                <div className={styles.login} >
                    <div className={styles.sucess}>
                        Password reset email has been sent.
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="10 22 50 50" style={{ width: "2%", backgroundColor: '#099949', borderRadius: "14rem" }}>
                            <g fill="#fff">
                                {/* <path fill="none" fill-rule="evenodd" d="M30.3 6a42.82 42.82 0 0 0-26.616 9.226A59.25 59.25 0 0 0 0 10.489 48.787 48.787 0 0 1 30.3 0c27.063 0 49 21.938 49 49s-21.937 49-49 49A48.786 48.786 0 0 1 0 87.511a59.307 59.307 0 0 0 3.684-4.737A42.823 42.823 0 0 0 30.3 92c23.748 0 43-19.252 43-43S54.049 6 30.3 6Z" clip-rule="evenodd"/> */}
                                <path d="M33.78 58.149 53.3 38.827 48.426 34l-19.52 19.322-9.728-9.629L14.3 48.52 28.929 63l4.876-4.827Z"/>
                            </g>
                        </svg>
                    </div>
                    <label htmlFor="username">
                        A password reset email has been sent to the email address on file for your account, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.
                    </label>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default index;
