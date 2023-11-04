import { FC } from "react";
import Button from "./ui/Button";

interface CardProps {
    model: string;
    modelYear: number;
    color: string;
    price: string;
    img: string;
    availability: boolean;
}

const Card: FC<CardProps> = ({ model, modelYear, color, img, price, availability }) => {
    return (
        <div className="flex justify-center items-center sm:items-start flex-col gap-[26px] lg:w-[445px]">
            <div className="flex relative border-[1px] border-gray2 rounded-t-[15px]">
                {!availability && (
                    <Button
                        variant="default"
                        className="flex right-[30%] bg-black top-[40%] px-[34px] py-[15px] absolute z-10  justify-center items-center hover:bg-black active:bg-black"
                    >
                        Нет в наличии
                    </Button>
                )}
                <img
                    src={img}
                    className={`${availability ? "w-[400px]" : "opacity-30"} w-[400px]`}
                    alt={`${model} img`}
                />
            </div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[12px]">
                    <h3 className="font-medium text-h3 leading-h3">{model}</h3>
                    <div className="flex flex-row gap-[14px]">
                        <p className="text-gray3 text-p leading-p">Год: {modelYear}</p>
                        <p className="text-gray3 text-p leading-p">Цвет: {color}</p>
                    </div>
                    <p className="text-gray4 text-h4 font-medium leading-h4">от {price}</p>
                </div>
                <div className="flex flex-row items-center gap-[25px]">
                    <Button variant={`${availability ? "default" : "secondary"}`} size="default">
                        Купить
                    </Button>
                    <Button>
                        <img
                            className="h-[24px] w-[27px]"
                            src={`${availability ? "/heart-default.svg" : "/disabled-heart.svg"}`}
                            alt="heart"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
