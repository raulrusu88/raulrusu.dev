import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Raul Rusu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="layout">
        <h1>Something</h1>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="footer-logo" />
        </a>
      </footer>
    </div>
  );
}
