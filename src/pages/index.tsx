import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Draw App | Rof1yev</title>
      </Head>
      <main className={poppins.className}>
        <h1>Hello ReactFlow</h1>
      </main>
    </>
  );
}
