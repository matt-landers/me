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
    <style jsx global>
      {`
        main {
          margin-left: auto;
          margin-right: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;
        }
        body {
          font-family: "Source Code Pro", monospace;
          background: black;
          color: rgba(255, 255, 255, 0.88);
        }
        a {
          color: #0091ea;
          text-decoration: none;
        }
        li {
          font-size: 1.25em;
        }
        h1 {
          font-weight: 900;
          font-size: 3rem;
        }
        h2 {
          color: #0091ea;
          font-weight: 800;
          font-size: 1.75rem;
        }
        .post {
          font-size: 16px;
          line-height: 28px;
          font-feature-settings: "kern", "liga", "clig", "calt";
        }
      `}
    </style>
    <Nav />
    {props.children}
  </main>
);
