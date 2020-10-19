import { withApollo } from "next-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export const apolloClient = new ApolloClient({
  uri: "https://mattlanders.wpengine.com/graphql",
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
