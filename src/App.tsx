import { FC, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { type GetAllCarsQuery } from "./graphql/generated";
import GetAllCars from "./graphql/queries/GetAllCars";
import Header from "./components/Header";
import SortSelect from "./components/SortSelect";
import Search from "./components/Search";
import Card from "./components/Card";
import { useSortedAndSearched } from "./hooks/useSortedAndSearched";

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
const App: FC = () => {
    const { loading, error } = useQuery<GetAllCarsQuery>(GetAllCars);
    const [updated, setUpdated] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const data = useSortedAndSearched(updated);
    const handleClick = () => {
        setUpdated(inputRef.current ? inputRef.current.value : "");
    };
    return (
        <div className="flex flex-col font-inter gap-[56px]">
            <Header />
            <div className="container mx-auto flex flex-col gap-[50px]">
                <div className="flex flex-row items-center justify-between">
                    <SortSelect />
                    <Search ref={inputRef} handleClick={handleClick} />
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-full">Loading</div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {data ? (
                            convertData(data).map((props) => <Card key={props.id} {...props} />)
                        ) : (
                            <div>Нет доступных автомобилей</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
