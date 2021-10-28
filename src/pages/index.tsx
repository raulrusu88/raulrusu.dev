import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Raul Rusu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="layout min-h-main">
        <h1>Something</h1>
      </main>
    </Layout>
  );
}
