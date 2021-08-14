import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project X</title>
        <meta name="description" content="Details in making" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://github.com/kattisrik/project-x'>Project X</a>
        </h1>        
      </main>

      <footer className={styles.footer}>
        <span>Dev team</span>
        <a
          href="https://github.com/kattisrik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Srikanth Katti
        </a>
        <a
          href="https://github.com/darshanpb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Darshan PB
        </a>
      </footer>
    </div>
  )
}
