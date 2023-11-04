import { useQuery } from "@apollo/client";
import { GetAllCarsQuery } from "../graphql/generated";
import GetAllCars from "../graphql/queries/GetAllCars";

export const useSortedAndSearched = (searchQuery: string) => {
    const { data, loading, error } = useQuery<GetAllCarsQuery>(GetAllCars);

    return data?.cars.filter((item) =>
        Object.values(item).some((value) => {
            return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
        }),
    );
};
