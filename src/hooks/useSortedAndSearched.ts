import { GetAllCarsQuery } from "../graphql/generated";
import { useMemo } from "react";

export const useSorted = (data: GetAllCarsQuery["cars"], sortMethod = "") => {
    return useMemo(() => {
        switch (sortMethod) {
            case "available": {
                return data.sort((a, b) => Number(b.availability) - Number(a.availability));
            }
            case "name.asc": {
                return data.sort((a, b) => a.brand.localeCompare(b.brand));
            }
            case "name.desc": {
                return data.sort((a, b) => b.brand.localeCompare(a.brand));
            }
            case "newest": {
                return data.sort((a, b) => b.model_year - a.model_year);
            }
            case "oldest": {
                return data.sort((a, b) => a.model_year - b.model_year);
            }
            case "price.asc": {
                return data.sort((a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1)));
            }
            case "price.desc": {
                return data.sort((a, b) => Number(b.price.slice(1)) - Number(a.price.slice(1)));
            }
            default:
                return data;
        }
    }, [sortMethod, data]);
};

export const useSortedAndSearched = (data: GetAllCarsQuery["cars"] = [], sortMethod: string, searchQuery: string) => {
    const sorted = useSorted(data, sortMethod);

    const filtered = sorted?.filter((item) =>
        Object.values(item).some((value) => {
            return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
        }),
    );

    return {
        filtered,
    };
};
