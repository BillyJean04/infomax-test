import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllCarsQuery } from "../../../graphql/generated";

export interface FavoriteSlice {
    favorited: GetAllCarsQuery["cars"];
}

const initialState: FavoriteSlice = {
    favorited: [],
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setFavorite: (state, action: PayloadAction<GetAllCarsQuery["cars"]>) => {
            state.favorited = [...state.favorited, ...action.payload];
        },
        deleteFavorite: (state, action: PayloadAction<number>) => {
            state.favorited = [...state.favorited.filter((elem) => elem?.id !== action.payload)];
        },
    },
});

export const { setFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
