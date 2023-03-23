import type { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import Nav from './nav'
import Footer from './footer'

type props = PropsWithChildren<{
  children: React.ReactNode
}>

const Page: React.FC<props> = ({ children }) => {
  return (
    <>
      {/* <Nav /> */}
      <main className={styles.main}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Page
