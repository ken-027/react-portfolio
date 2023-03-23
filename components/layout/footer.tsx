import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'

type props = PropsWithChildren<{}>

const Footer: React.FC<props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <h2>Footer Here</h2>
    </footer>
  )
}

export default Footer
