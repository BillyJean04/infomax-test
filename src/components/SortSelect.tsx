import { Dispatch, FC, SetStateAction } from "react";

interface SortSelectProps {
    sortMethod: string;
    setSortMethod: Dispatch<SetStateAction<string>>;
}

const SortSelect: FC<SortSelectProps> = ({ sortMethod, setSortMethod }) => {
    return (
        <div className="flex flex-row items-center gap-[12px]">
            <svg width="14" height="16" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.05342 3.90121L5.94658 3L2.97329 0L0 3L0.893155 3.90121L2.34161 2.43977V9.82409H3.60497V2.43977L5.05342 3.90121Z"
                    fill="black"
                />
                <path
                    d="M10.1069 8.09866L8.6584 9.5601V2.17578H7.39505V9.5601L5.94659 8.09866L5.05344 8.99987L8.02672 11.9999L11 8.99987L10.1069 8.09866Z"
                    fill="black"
                />
            </svg>

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
