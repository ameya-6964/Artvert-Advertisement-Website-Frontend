import Head from "next/head";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artvert | Mural Advertising</title>
        <meta
          name="description"
          content="Social Media Marketing , Mural Advertising, Personal Brand Builders"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/paint-palette.png" />
      </Head>
      <main>
        <div className="App">
          <AboutUs />
        </div>
      </main>
    </>
  );
}
