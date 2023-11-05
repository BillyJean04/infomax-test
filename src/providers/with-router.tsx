import { FC } from "react";
import { ApolloProvider } from "../lib/ApolloProvider";

export const withRouter = (Component: FC) => () => (
    <ApolloProvider>
        <Component />
    </ApolloProvider>
);
