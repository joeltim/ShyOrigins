import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShyOrigins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ShyOrigins!
        </h1>

        <p className={styles.description}>
          A survival Minecraft server for Origins!
        </p>
      </main>
    </div>
  )
}
