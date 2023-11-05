import { withProviders } from "./providers";
import Header from "./components/Header";
import { Routes } from "./routes";

const App = () => {
    return (
        <>
            <Header />
            <Routes />
        </>
    );
};

export default withProviders(App);
