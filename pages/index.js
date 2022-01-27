import Head from 'next/head'
//import Image from 'next/image'
import Link  from 'next/link'
//import styles from '../styles/Home.module.css'
import Header from "../components/header"
		  

export default function Home() {
  return (
    <div className="container">
      
      <Head>
        <title>메인 - Caffe : 온라인 커피 주문</title>
      </Head>
{/*       <header style={{ display: 'flex', flexDirction: 'left' }} > bootstrap */}

      <Header/>
      <h1> 우리 카페 </h1>

      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">우리집 Caffe</h1>
        <p className="col-md-8 fs-4">온라인으로 주문하고 편하게 커피를 받아보세요!</p>

        <Link href="/introduce">
          <button className="btn btn-primary btn-lg" type="button">Caffe 소개</button>
        </Link>
        <Link href="/order">
          <button className="btn btn-outline-primary btn-lg ml-2" type="button">주문하기</button>
        </Link>
        </div>
      </div>

    </div>
  )
}

{/* 
<button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-info">Info</button>
          <button type="button" className="btn btn-light">Light</button>
          <button type="button" className="btn btn-dark">Dark</button>
          <a href="#none" className="btn btn-primary"> Primary Link </a>
          <button type="button" className="btn btn-link">Link</button>
*/}

{/*
  <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
*/}