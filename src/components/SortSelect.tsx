import { Dispatch, FC, SetStateAction } from "react";

interface SortSelectProps {
    sortMethod: string;
    setSortMethod: Dispatch<SetStateAction<string>>;
}

const SortSelect: FC<SortSelectProps> = ({ sortMethod, setSortMethod }) => {
    return (
        <div className="flex flex-row items-center gap-[12px]">
            <img className="w-[14px] h-[16px]" src="/sort-arrows.svg" alt="sort-arrows" />
            <select
                value={sortMethod}
                onChange={(e) => setSortMethod(e.target.value)}
                name="cars"
                id="cars"
                className="appearance-none cursor-pointer text-h4 leading-h4 focus:outline-0"
            >
                <option value="available">Сначала в наличии</option>
                <option value="name.asc">По имени (A-Z)</option>
                <option value="name.desc">По имени (Z-A)</option>
                <option value="newest">Сначала новее</option>
                <option value="price.asc">Сначала дешевле</option>
                <option value="price.desc">Сначала дороже</option>
            </select>
        </div>
    );
};

export default SortSelect;
