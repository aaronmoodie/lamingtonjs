import '../styles/globals.css'
import Layout from '../components/layout'

function Site({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Site
