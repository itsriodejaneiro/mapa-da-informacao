import '../styles/globals.css'
import { GlobalStyle, theme } from './ThemeConfig'
import { ThemeProvider } from "styled-components"
// import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'

function MyApp({ Component, pageProps, router }) {
  const url = `${router.route}`

  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Layout>
          {/* <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          > */}
          <Component {...pageProps} canonical={url} key={url} />
          {/* </AnimatePresence> */}
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
