import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ---------- HEADER ----------- */}
      <Header title="Prettie" />
      <Component {...pageProps} />
      {/* -------- FOOTER -----------> */}
      <Footer />
    </>
  );
}

export default MyApp;
