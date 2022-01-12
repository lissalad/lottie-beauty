import "../styles/globals.css";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const MasterHeader = dynamic(() => import("../components/Header"), { ssr: false });
// const header = Header("Prettie");

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ---------- HEADER ----------- */}
      <MasterHeader title="Prettie" />
      <Component {...pageProps} />
      {/* -------- FOOTER -----------> */}
      <Footer />
    </>
  );
}

export default MyApp;
