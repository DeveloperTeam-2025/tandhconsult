import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import Input from '../../Inputs/index'
import Button from '../../Buttons/index'
import map from '../map.json'
const index = () => {

  return (
        <section className={styles.banner_consult}>
            <div className={styles.container}>
                <div className={styles.consult_wrapper}>
                    <div className={classNames(`${styles.consult_col} wow  animate__fadeInLeft animate__animated`)}>
                        <span className={styles.consult__subtitle}>Still have questions?</span>
                        <h2 className={styles.consult__title}>Get a free consultation</h2>
                        <div>
                            <form action="" className={styles.consult_form}>
                            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Full Name' name="name" type="text"  />
                            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Email Address' name="email" type="text"  />
                            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Inquiry Type' name="inquiry" type="" option={["Fraud & Dispute Support","Other inquiries","Partnership","Supplier / Service Provider","Candidate / HR Related","Business Services"]} />
                            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Country' name="country" type="" option={map} />
                            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32' placeholder='How we can help you? Please provide as much details as possible ' name="details" type="textarea"  />
                            <div className="p-4"></div>
                            <span className={styles.privacy}>I accept Privacy Policy</span>
                            <Button direct='/'>
                            <span>Submit</span>
                            </Button>
                            </form>
                        </div>
                    </div>
                    <div className={classNames(`${styles.consult_col}  wow  animate__fadeInRight animate__animated`)}>
                        <span className={styles.consult__subtitle}>REVIEWS</span>
                        <h2 className={styles.consult__title}>We are recommended</h2>
                        <div className='text-white border-b-2 border-white leading-9'>
                            <p >Alexandra</p>
                            <p>August 16, 2024</p>
                            <p className='pb-6'>Excellent!!!</p>
                        </div>
                        <div className='text-white border-b-2 border-white leading-9 pt-4'>
                            <p >Ahmed</p>
                            <p>August 16, 2024</p>
                            <p className='pb-6'>Thank you Jennifer for your help, it was really helpful</p>
                        </div>
                        <div className={classNames(styles.extra, 'text-white ')}>
                            <div className='flex gap-4'>
                            <span>Give feedback</span><i className={styles.plus_icon}></i>
                            </div>
                            <div className='p-2 border-white border-2'>
                            <span>TRUSTPILOT</span> <i className={styles.arrow_right_icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default index
