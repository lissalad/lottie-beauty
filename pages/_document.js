import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        </Head>
        <body className="bg-red-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
