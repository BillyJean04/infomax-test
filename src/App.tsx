import { FC } from "react";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { type GetAllCarsQuery } from "./graphql/generated";
import GetAllCars from "./graphql/queries/GetAllCars";
import Card from "./components/Card";

function convertData(obj: GetAllCarsQuery["cars"]) {
    return obj.map((elem) => ({
        id: elem.id,
        model: elem.model,
        modelYear: elem.model_year,
        color: elem.color,
        price: elem.price,
        img: `${import.meta.env.VITE_API_BASE_URL}${elem.img_src}`,
        availability: elem.availability,
    }));
}
const App: FC = () => {
    const { data, loading, error } = useQuery<GetAllCarsQuery>(GetAllCars);

    if (error) {
        console.log(error.message);
    }

    return (
        <div className="flex flex-col gap-4 font-inter">
            <Header />
            {loading ? (
                <div className="flex justify-center items-center h-full">Loading</div>
            ) : (
                <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {data ? (
                        convertData(data.cars).map((props) => <Card key={props.id} {...props} />)
                    ) : (
                        <div>Нет доступных автомобилей</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
