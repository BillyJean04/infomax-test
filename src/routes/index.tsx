import { FC } from "react";
import { Route, Routes as DOMRoutes } from "react-router-dom";
import Cars from "../pages/Cars/Cars";
import Favorites from "../pages/Favorites/Favorites";

export const Routes: FC = () => (
    <DOMRoutes>
        <Route path="/" element={<Cars />} />
        <Route path="/favorites" element={<Favorites />} />
    </DOMRoutes>
);
