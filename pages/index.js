import Head from "next/head";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Next News</title>
      </Head>
      <h1>Next News</h1>
    </div>
  );
}
