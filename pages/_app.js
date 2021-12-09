import '../styles/globals.css'
import { GlobalStyle, theme } from '../ThemeConfig'
import { ThemeProvider } from "styled-components"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }) {
  const url = `${router.route}`

  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} canonical={url} key={url} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
