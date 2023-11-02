import { ReactNode } from "react";
import { ApolloClient, ApolloProvider as Provider, InMemoryCache } from "@apollo/client";

export function ApolloProvider({ children }: { children: ReactNode }) {
    const client = new ApolloClient({
        uri: "https://localhost:4000/",
        cache: new InMemoryCache(),
    });

    return <Provider client={client}>{children}</Provider>;
}
