import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="" content="" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bebas+Neue&family=Shizuru&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Bungee+Shade&family=Grenze+Gotisch:wght@500&family=Londrina+Outline&family=Monofett&family=Rampart+One&family=Righteous&family=Tourney:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap"
            rel="stylesheet"
          />
          <script src="../path/to/tw-elements/dist/js/index.min.js"></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
          />
        </Head>
        <body className="bg-pink-100">
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
