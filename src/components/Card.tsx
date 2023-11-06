import { FC } from "react";
import Button from "./ui/Button";
import HeartButton from "./HeartButton";
import DeleteButton from "./DeleteButton";

interface CardProps {
    id: number;
    model: string;
    modelYear: number;
    color: string;
    price: string;
    img: string;
    availability: boolean;
    description: string;
    isFavorite?: boolean;
}

const Card: FC<CardProps> = ({
    id,
    model,
    modelYear,
    color,
    img,
    price,
    availability,
    isFavorite = false,
    description,
}) => {
    if (isFavorite) {
        return (
            <div className="flex flex-col lg:flex-row gap-[26px] pb-[26px] border-b-[1px] border-gray2 last:border-none last:pb-0">
                <div className="flex relative border-[1px] border-gray2 rounded-[15px]">
                    <img className="max-full lg:max-w-[445px] rounded-[15px]" src={img} alt={`${model} img`} />
                </div>
                <div className={`flex flex-col gap-[20px] justify-between`}>
                    <div className="flex flex-col gap-[16px] max-w-[810px]">
                        <h3 className="font-medium text-h2 leading-h2">{model}</h3>
                        <div className="flex flex-col gap-[33px]">
                            <div className="flex flex-col gap-[16px]">
                                <p className="text-gray3 text-p leading-p">
                                    {description.length > 300 ? description.slice(0, 300) + "..." : description}
                                </p>
                                <p className="text-gray3 text-p leading-p">Год: {modelYear}</p>
                                <p className="text-gray3 text-p leading-p">Цвет: {color}</p>
                            </div>
                            <p className="text-gray4 text-h3 font-medium leading-h3">от {price}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-[25px]">
                        <Button className="px-[34px]" variant="default" size="default">
                            Выбрать комплектацию
                        </Button>
                        <DeleteButton cardId={id} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-start gap-[26px] flex-col justify-center sm:items-start">
            <div className="flex relative border-gray2 border-[1px] rounded-t-[15px]">
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
                    className={`${availability ? "" : "opacity-30"} w-full rounded-t-[15px]`}
                    alt={`${model} img`}
                />
            </div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[12px]">
                    <h3 className="font-medium text-h3 leading-h3">
                        {model.length > 34 ? model.slice(0, 28) + "..." : model}
                    </h3>
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
                    <HeartButton cardId={id} disabled={!availability} />
                </div>
            </div>
        </div>
    );
};

export default Card;
