import Head from "next/head";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export async function getStaticProps() {
  return {
    props: {
      message: 'This is Mapbox.',
    },
  };
}

export default function Home({ message }) {
  return (
    <>
      <Head>
        <title>Mapbox demo</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Map />
      </main>
    </>
  );
}
