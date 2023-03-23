import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import WaveImg from '@/assets/wave.png'

type props = PropsWithChildren<{}>

const Footer: React.FC<props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <img
        src={WaveImg}
        className={styles.waveFooter}
        alt='Wave background'
      />
      <div>
        <h2>Design and Built by Kenneth Andales</h2>
      </div>
    </footer>
  )
}

export default Footer
