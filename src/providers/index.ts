import { FC } from "react";
import { withRouter } from "./with-router";
import { withApollo } from "./with-apollo";
import { withRedux } from "./with-redux";

export const withProviders = (component: FC) => withApollo(withRedux(withRouter(component)));
