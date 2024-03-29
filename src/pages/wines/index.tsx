import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
    const root = 'wines';
    return (
    <div className={styles.container}>
      <Head>
        <title>Wine or Beer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="../"><i>Wine or Beer!</i></a>
        </h1>

        <p className={styles.description}>
            Find your favourite alcohol!🍷🍾🍻🍺
        </p>

        <div className={styles.grid}>
          <a href={root+"/reds"} className={styles.card}>
            <h2>Red Wines &rarr;</h2>
            <p>Find your perfect match with the best Red Wine options.</p>
          </a>

          <a href={root+"/whites"} className={styles.card}>
            <h2>White Wines &rarr;</h2>
            <p>Find your perfect match with the best White Wine options.</p>
          </a>

          <a
            href={root+"/sparkling"}
            className={styles.card}
          >
            <h2>Sparkling Wines &rarr;</h2>
            <p>Find your perfect match with the best Sparkling Wine options.</p>
          </a>

          <a
            href={root+"/rose"}
            className={styles.card}
          >
            <h2>Rose Wines &rarr;</h2>
            <p>
            Find your perfect match with the best Rose Wine options.
            </p>
          </a>
          <a
            href={root+"/dessert"}
            className={styles.card}
          >
            <h2>Dessert Wines &rarr;</h2>
            <p>
            Find your perfect match with the best Dessert Wine options.
            </p>
          </a>
          <a
            href={root+"/port"}
            className={styles.card}
          >
            <h2>Port Wines &rarr;</h2>
            <p>
            Find your perfect match with the best Port Wine options.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
