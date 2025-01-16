
import styles from './style.module.scss'
import classNames from "classnames";
const certificates = [
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/04/crystal_hanna-adynets-1024x725.jpg",
    "alt": "Crystal Hanna Adynets",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/04/crystal_jasmine-hussein-1024x725.jpg",
    "alt": "Crystal Jasmine Hussein",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/03/berkeleyx-cs198.1x-certificate-dr-jasmine-1024x672.png",
    "alt": "BerkeleyX CS198.1x Certificate for Dr. Jasmine",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/03/berkeleyx-cs198.1x-certificate-_-hasan-muhandes-1024x674.png",
    "alt": "BerkeleyX CS198.1x Certificate for Hasan Muhandes",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/01/cs198.1x-bitcoin-and-cryptocurrencies-1-1024x712.png",
    "alt": "CS198.1x Bitcoin and Cryptocurrencies Certificate",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/01/screenshot-2023-01-05-at-18.34.35-1-1024x675.png",
    "alt": "Screenshot from January 5, 2023",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2021/09/coursera-anastasia-2-1024x791.png",
    "alt": "Coursera Certificate for Anastasia",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/01/screenshot-2023-01-05-at-18.32.48-3-725x1024.png",
    "alt": "Screenshot from January 5, 2023, at 18:32:48",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/01/chainalysis-investigation-specialist-certification-1-1-1024x791.jpeg",
    "alt": "Chainalysis Investigation Specialist Certification",
    "caption": "The Chainalysis Investigation Specialist Certification (CISC) The Chainalysis Investigation Specialist Certification (CISC) builds on CRC & Reactor experience to develop an expert-level skill set in blockchain investigations based in Chainalysis Reactor. CISC focuses on advanced workflows, recognizing obfuscation patterns, and incorporating all source information to evaluate entity risk & move beyond commonly perceived limitations of blockchain analysis. This course enables investigators to use advanced Chainalysis Reactor features & workflows, conduct enhanced transaction analysis by using all-source information provided by other available tools. It teaches how to identify when specific wallet types are in use, move past perceived limitations of blockchain analysis using advanced workflows and investigate transactions that use obfuscation techniques such as CoinJoin mixing and chain hopping."
  },	
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/01/chainalysis-reactor-certification-1-1024x791.jpeg",
    "alt": "Chainalysis Reactor Certification (CRC)",
    "caption": "The Chainalysis Reactor Certification (CRC) The Chainalysis Reactor Certification (CRC) credential provides practitioners with the knowledge and skills to analyze and trace transactions on the Bitcoin blockchain. This training using Reactor—the tool of choice for investigators, compliance officers, analysts, and regulators. This course covered next topics: – understand Bitcoin transaction fundamentals, – conduct transaction analysis and recognize key patterns, -trace the origin and destination of bitcoin, – evaluate different categories of actors in the ecosystem, -apply techniques to identify services on the Bitcoin Blockchain, – leverage open-source intelligence (OSINT), solve real-world case studies using a full-spectrum of techniques, – learn how mixers operate and how to identify them, – understand the process of subpoena requests and responses"
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/01/screenshot-2023-01-05-at-18.31.33-2-1024x791.png",
    "alt": "Screenshot from January 5, 2023, at 18:31:33",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/04/crystal_tahir-khan-1024x725.jpg",
    "alt": "Crystal Tahir Khan",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/05/certificate-1024x792.png",
    "alt": "Certificate",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/03/ravid-bitcoin-and-cryptocurrencies-berkeley-certificate-1024x672.jpeg",
    "alt": "Ravid Bitcoin and Cryptocurrencies Berkeley Certificate",
    "caption": ""
  },
  {
    "src": "https://tandhconsult.com/wp-content/uploads/2023/03/mathias-bitcoin-and-cryptocurrencies-berkeley-certificate-1024x668.png",
    "alt": "Mathias Bitcoin and Cryptocurrencies Berkeley Certificate",
    "caption": ""
  }
]


const index = () => {
  return (
    <main>
      <section className={styles.privacy} id="privacy">
        <div className={styles.container}>
          <h1 className={classNames(`${styles.title} ${styles.privacy__title} wow animate__animated animate__fadeInLeft`)}>
            <span>Certificates</span>
          </h1>
          <div className={classNames(`${styles.privacy__block} wow animate__animated animate__fadeInUp`)}>
              <p>
              Our team is composed of some very talented professionals. They are people, who are always prepared for new challenges, capable to provide our customers with the best quality work. Our team is one of the most important assets, which helps us to improve our products on a daily basis.
              </p>
              <div className={classNames(styles.certificate_gallery,` grid gap-8`)} >
                {certificates.map((certificate, index) => (
                    <figure key={index} className="certificate-item">
                    <img
                        src={certificate.src}
                        alt={certificate.alt}
                        loading="lazy"
                        className="certificate-image"
                    />
                    { certificate.caption &&
                      <figcaption className="certificate-caption">
                      {certificate.caption}
                      </figcaption>
                    }
                    </figure>
                ))}
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
