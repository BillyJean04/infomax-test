import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { GetAllCarsQuery } from "../graphql/generated";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export function convertData(obj: GetAllCarsQuery["cars"]) {
    return obj.map((elem) => ({
        id: elem.id,
        model: `${elem.brand} ${elem.model}`,
        description: elem.description,
        modelYear: elem.model_year,
        color: elem.color,
        price: elem.price,
        img: `${import.meta.env.VITE_API_BASE_URL}${elem.img_src}`,
        availability: elem.availability,
    }));
}
