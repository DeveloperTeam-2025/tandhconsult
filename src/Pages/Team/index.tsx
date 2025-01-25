
import styles from './style.module.scss'
import classNames from 'classnames';
const teamMembers = [
  {
    name: 'Tahir Khan',
    role: 'Co-founder, CEO',
    image: 'https://tandhconsult.com/wp-content/uploads/2022/07/img_9049-scaled.jpg',
    linkedin: 'https://www.linkedin.com/in/tahirkhansehar/',
    animationDelay: '0.1s',
  },
  {
    name: 'Hanna Adynets',
    role: 'Co-founder, Blockchain Investigator',
    image: 'https://tandhconsult.com/wp-content/uploads/2022/06/hanna-adynets.jpg',
    linkedin: 'https://www.linkedin.com/in/hanna-adynets-549137165/',
    animationDelay: '0.4s',
  },
  {
    name: 'Hasan Muhandes',
    role: 'Senior Consultant, Team Leader',
    image: 'https://tandhconsult.com/wp-content/uploads/2022/07/rol00109-scaled-e1708700861880.jpg',
    linkedin: 'https://www.linkedin.com/in/hasan-muhandes-9085a1194/',
    animationDelay: '0.7s',
  },
  {
    name: 'Cristian Sepulveda',
    role: 'Senior Consultant',
    image: 'https://tandhconsult.com/wp-content/uploads/2022/07/rol00067-scaled-e1708698887267.jpg',
    linkedin: 'https://www.linkedin.com/in/cristiansepulvedar/',
    animationDelay: '1s',
  },
  // Add more team members as needed
];

const TeamSection = () => {
  return (
    <section className={styles.partner} id="partners">
      <div className={styles.container}>
        <h1 className={classNames(`${styles.title} wow animate__animated animate__fadeInUp`)} data-wow-delay="0.6s">
          <span>Get to Know Our Team: Greyzone Consulting’s Investigations Services</span>
        </h1>
      </div>
      <div className={classNames(`${styles.container} ${styles.team_container}`)}>
        {teamMembers.map((member, index) => (
          <div className={styles.single_team} key={index} style={{ padding: '0 20px' }}>
            <div>
              <img
                style={{ objectFit: 'cover', width: '100%', height: '500px' }}
                src={member.image}
                alt={`${member.name}'s photo`}
              />
            </div>
            <h2
              className={classNames(`${styles.title} wow animate__fadeInUp animate__animated`)}
              data-wow-delay={member.animationDelay}
              style={{ marginBottom: '0px' }}
            >
              <span style={{ fontSize: '24px' }}>{member.name}</span>
            </h2>
            <p
              className={classNames(` ${styles.title2} wow animate__fadeInUp animate__animated`)}
              
            >
              {member.role}
            </p>
            <a
              className={classNames(`${styles.title} wow animate__fadeInUp animate__animated`)}
              href={member.linkedin}
              data-wow-delay={member.animationDelay}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                background: 'url(https://tandhconsult.com/wp-content/uploads/2021/05/ldin.svg)',
                backgroundSize: 'contain',
              }}
            >
              <i
                className={classNames(`${styles.i} ${styles.i_insta}`)}
                style={{
                  maskImage: 'url(https://tandhconsult.com/wp-content/uploads/2021/05/ldin.svg)',
                }}
              ></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
