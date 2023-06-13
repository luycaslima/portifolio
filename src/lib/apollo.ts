import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri:'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cla3tiut634e701uk9sena3eu/master',
    cache: new InMemoryCache()
})