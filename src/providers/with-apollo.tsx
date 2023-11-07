import { FC } from "react";
import { ApolloProvider } from "../lib/ApolloProvider";

export const withApollo = (Component: FC) => () => (
    <ApolloProvider>
        <Component />
    </ApolloProvider>
);
