import { useCallback, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GetAllCarsQuery } from "../../graphql/generated";
import GetAllCars from "../../graphql/queries/GetAllCars";
import { useSortedAndSearched } from "../../hooks/useSortedAndSearched";
import SortSelect from "../../components/SortSelect";
import Search from "../../components/Search";
import Card from "../../components/Card";

function convertData(obj: GetAllCarsQuery["cars"]) {
    return obj.map((elem) => ({
        id: elem.id,
        model: `${elem.brand} ${elem.model}`,
        modelYear: elem.model_year,
        color: elem.color,
        price: elem.price,
        img: `${import.meta.env.VITE_API_BASE_URL}${elem.img_src}`,
        availability: elem.availability,
    }));
}

const Cars = () => {
    const { data, loading, error } = useQuery<GetAllCarsQuery>(GetAllCars);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortMethod, setSortMethod] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = useCallback(() => {
        setSearchQuery(inputRef.current ? inputRef.current.value : "");
    }, []);

    const { filtered } = useSortedAndSearched(data?.cars, sortMethod, searchQuery);

    if (error) {
        console.log(error.message);
    }

    return (
        <div className="flex flex-col font-inter gap-[56px]">
            <div className="container mx-auto flex flex-col gap-[50px]">
                <div className="flex flex-row items-center justify-between">
                    <SortSelect sortMethod={sortMethod} setSortMethod={setSortMethod} />
                    <Search ref={inputRef} handleClick={handleClick} />
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-full">Loading</div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {filtered ? (
                            convertData(filtered).map((props) => <Card key={props.id} {...props} />)
                        ) : (
                            <div>Нет доступных автомобилей</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cars;
