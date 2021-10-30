import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Raul Rusu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-main">
        <Header />
      </main>
    </Layout>
  );
}
