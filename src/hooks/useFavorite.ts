import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteFavorite, setFavorite } from "../redux/features/favorite/favoriteSlice";
import { useQuery } from "@apollo/client";
import { GetAllCarsQuery } from "../graphql/generated";
import GetAllCars from "../graphql/queries/GetAllCars";

export const useFavorite = (cardId: number) => {
    const { favorited } = useAppSelector((state) => state.favorite);
    const { data } = useQuery<GetAllCarsQuery>(GetAllCars);

    const dispatch = useAppDispatch();

    const hasFavorited = useMemo(() => {
        return favorited.some((elem) => elem?.id === cardId);
    }, [cardId, favorited]);

    const toggleFavorite = () => {
        if (hasFavorited) {
            dispatch(deleteFavorite(cardId));
        } else {
            const filtered = data?.cars.filter((elem) => elem?.id === cardId);
            dispatch(setFavorite(filtered ?? []));
        }
    };

    return {
        hasFavorited,
        toggleFavorite,
    };
};
