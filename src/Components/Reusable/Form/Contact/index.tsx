
import styles from './style.module.scss'
import Input from '../../Inputs/index'
import Button from '../../Buttons/index'
// import map from '../map.json'
const index = () => {
  return (
    <div>
        <form action="" className={styles.consult_form}>
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Full Name' name="name" type="text"  />
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Email Address' name="email" type="text"  />
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Inquiry Type' name="inquiry" type="" option={["Fraud & Dispute Support","Other inquiries","Partnership","Supplier / Service Provider","Candidate / HR Related","Business Services"]} />
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Phone Number' name="mobile" type="number"  />
            {/* <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Country' name="country" type="" option={map} /> */}
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32' placeholder='How we can help you? Please provide as much details as possible ' name="details" type="textarea"  />
            <div className="p-4"></div>
            <span className={styles.privacy}>I accept Privacy Policy</span>
            <Button direct='/contact-us'>
            <span>Submit</span>
            </Button>
        </form>
    </div>
  )
}

export default index
