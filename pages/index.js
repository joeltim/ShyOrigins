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
    
        <iframe src="https://discord.com/widget?id=799585278557683732&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </main>
    </div>
  )
}
