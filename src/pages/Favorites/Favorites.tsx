import { useAppSelector } from "../../redux/hooks";
import { convertData } from "../../lib/utils";
import Card from "../../components/Card";
import Container from "../../components/Container";

const Favorites = () => {
    const { favorited } = useAppSelector((state) => state.favorite);

    return (
        <Container className="gap-[64px] font-inter pb-[40px]">
            <div className="flex flex-col gap-[26px] ">
                <h1 className="font-bold text-h1 leading-h1 ">
                    Избранные товары &mdash;
                    {` ${favorited.length} позиций`}
                </h1>
                <span className="flex w-full border-b-[1px] border-gray2" />
            </div>
            <div className="flex flex-col gap-[36px]">
                {favorited.length > 0 ? (
                    convertData(favorited).map((elem) => <Card key={elem.id} {...elem} isFavorite />)
                ) : (
                    <div>Спискок избранных товаров пуст</div>
                )}
            </div>
        </Container>
    );
};

export default Favorites;
