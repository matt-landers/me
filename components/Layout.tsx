import Head from "next/head";
import { Nav } from "./Nav";

export const Layout = (props) => (
  <main>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,400;0,900;1,200;1,400;1,900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Nav />
    {props.children}
  </main>
);
