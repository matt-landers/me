import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/apollo";
import Link from "next/link";
import Head from "next/head";
import { Layout, Header } from "../components";
import { useVideoStats } from "../lib/hooks/videos";
import VideoList from "../components/VideoList";

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
    }
  `);

  const videoStats = useVideoStats();

  const posts = data?.posts?.nodes;

  return (
    <Layout>
      <Head>
        <title>Matt Landers</title>
      </Head>
      <Header title="Blogs" />
      {posts &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>
              <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </article>
        ))}
      <Header title="Videos" />
      <VideoList items={videoStats} />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
