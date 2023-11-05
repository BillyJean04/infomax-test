import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

export const withApollo = (Component: FC) => () => (
    <BrowserRouter>
        <Component />
    </BrowserRouter>
);
