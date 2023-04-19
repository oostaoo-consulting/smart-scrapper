import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head> {/* !!! toChange x2 !!! */}
        <title>!!! Title to change !!!</title>
        <meta name="description" content="!!! Description to change !!!" />
      </Head>

      <main className=" h-screen flex justify-center items-center bg-zinc-300">
        {/* !!! Page template (keep main tag) !!! */} Hello
      </main>
    </>
  );
}
