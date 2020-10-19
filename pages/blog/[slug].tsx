import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../../lib/apollo";
import { useRouter } from "next/router";
import { Layout, Header } from "../../components";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery(gql`
    query {
      postBy(slug: "${slug}") {
        title
        content
      }
    }
  `);

  const post = data?.postBy;

  return (
    <Layout>
      <Header title={post?.title} />
      <article className="post">
        <div dangerouslySetInnerHTML={{ __html: post?.content }} />
      </article>
    </Layout>
  );
};

export default withApollo()(Post);
