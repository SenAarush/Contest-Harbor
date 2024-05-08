import styles from './Home.module.scss'
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/vector.png'

function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>
          <span>
            <Typewriter
              words={['Ignite',
                'Thrive',
                'Soar',
                'Excel',
                'Prevail']}
              loop={false}
              cursor
              delaySpeed={1500}
            />
          </span>
        </h2>
        <h5>Missing contests because of bad memory?</h5>
        <h6>Level up! <span>Join now</span> , never miss out!</h6>
      </div>
      <div className={styles.profile}>
          <img src={profile} alt="" />
      </div>
    </div>
  )
}

export default Home
