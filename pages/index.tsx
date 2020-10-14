import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/apollo";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "../components/Layout";

const Home = () => {
  const { data } = useQuery(gql`
    query {
      posts {
        nodes {
          id
          title
          slug
          excerpt
        }
      }
      videos {
        nodes {
          link
          slug
          title
          id
        }
      }
    }
  `);

  const posts = data?.posts?.nodes;

  return (
    <Layout>
      <Head>
        <title>Matt Landers</title>
      </Head>
      <header>
        <h1>Matt Landers</h1>
      </header>
      {posts &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>
              <Link href={`/[slug]`} as={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </article>
        ))}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
