import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro"/>
          
          {/* <meta name="robots" content="index, follow">
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"> */}

          <meta property="og:locale" content="pt_BR"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Mapa da Informação - ITS"/>
          <meta property="og:description" content="Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro"/>
          <meta property="og:url" content="https://mapadainformacao.com.br/"/>
          <meta property="og:site_name" content="Mapa da Informação"/>
          <meta property="article:publisher" content="https://www.facebook.com/ITSriodejaneiro"/>

          <meta property="og:image" content=""/>
          <meta property="og:image:width" content="1201"/>
          <meta property="og:image:height" content="629"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="Mapa da Informação"/>
          <meta name="twitter:image" content=""/>
          <meta name="twitter:creator" content="@itsriodejaneiro"/>
          <meta name="twitter:site" content="@itsriodejaneiro"/>

          <link rel="canonical" href="https://mapadainformacao.com.br/"/>
          <link rel="shortlink" href="https://mapadainformacao.com.br/"/>
          <link rel="alternate" href="https://mapadainformacao.com.br/" hreflang="pt"/>
          <link rel="alternate" href="https://mapadainformacao.com.br/" hreflang="x-default"/>
          <link rel="icon" href="/favicon.png" />
          
          <link rel="preload" href="/fonts/Fira_Mono/FiraMono-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Fira_Sans/FiraSans-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Fira_Sans/FiraSans-Thin.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Fira_Sans/FiraSans-SemiBold.ttf" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument