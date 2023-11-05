import { GetAllCarsQuery } from "../../../graphql/generated";
import { createSlice } from "@reduxjs/toolkit";

export interface FavoriteSlice {
    favorited: Partial<GetAllCarsQuery["cars"]>;
}

const initialState: FavoriteSlice = {
    favorited: [],
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.favorited = [...state.favorited, ...action.payload];
        },
        deleteFavorite: (state, action) => {
            state.favorited = [...state.favorited.filter((elem) => elem?.id !== action.payload)];
        },
    },
});

export const { setFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
