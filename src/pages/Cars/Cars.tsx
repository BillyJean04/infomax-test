import { useCallback, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { useSortedAndSearched } from "../../hooks/useSortedAndSearched";
import SortSelect from "../../components/SortSelect";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { convertData } from "../../lib/utils";
import GetAllCars from "../../graphql/queries/GetAllCars";
import { GetAllCarsQuery } from "../../graphql/generated";

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
        <div className="flex flex-col font-inter gap-[56px] pb-[40px]">
            <div className="container mx-auto flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5 sm:flex-row  items-center justify-between">
                    <SortSelect sortMethod={sortMethod} setSortMethod={setSortMethod} />
                    <Search ref={inputRef} handleClick={handleClick} />
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-full">Loading</div>
                ) : (
                    <div className="grid grid-cols-1 gap-x-[20px] gap-y-[73px] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
