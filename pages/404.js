import Head from 'next/head'

import Layout from '../components/layout'

import utilStyles from '../styles/utils.module.css'

export default function My404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <div className={utilStyles.header}>
        <h1 className={utilStyles.heading2Xl}>404</h1>
        <h2 className={utilStyles.lightText}>Page Not Found!</h2>
      </div>
    </Layout>
  )
}