import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloProvider } from "./lib/ApolloProvider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
    throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <ApolloProvider>
                <App />
            </ApolloProvider>
        </ReduxProvider>
    </React.StrictMode>,
);
