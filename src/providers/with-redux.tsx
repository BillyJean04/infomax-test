import { FC } from "react";
import { store } from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";

export const withRedux = (Component: FC) => () => (
    <ReduxProvider store={store}>
        <Component />
    </ReduxProvider>
);
