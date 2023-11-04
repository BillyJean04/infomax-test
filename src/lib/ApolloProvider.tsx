import { ReactNode } from "react";
import { ApolloClient, ApolloProvider as Provider, InMemoryCache } from "@apollo/client";

export function ApolloProvider({ children }: { children: ReactNode }) {
    const client = new ApolloClient({
        uri: `${import.meta.env.VITE_API_BASE_URL}/api`,
        cache: new InMemoryCache(),
    });

    return <Provider client={client}>{children}</Provider>;
}
