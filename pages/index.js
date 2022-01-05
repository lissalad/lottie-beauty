import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Header title="lottie does makeup" />
        {/* <!-- HEADER --> */}
        <header>
          <h1>Lottie Beauty</h1>
          <nav>
            <ul>
              <li>Hair</li>
              <li>Makeup</li>
              <li>About the Artist</li>
            </ul>
          </nav>
        </header>

        {/* <!-- MAIN --> */}
        <main></main>

        {/* <!-- FOOTER --> */}
        <footer>
          <div>SOCIAL MEDIA</div>
        </footer>
      </body>
    </div>
  );
}
