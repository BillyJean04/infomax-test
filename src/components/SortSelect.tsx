import { Dispatch, FC, SetStateAction } from "react";

interface SortSelectProps {
    sortMethod: string;
    setSortMethod: Dispatch<SetStateAction<string>>;
}

const selectOptions = [
    {
        value: "available",
        label: "Сначала в наличии",
    },
    {
        value: "name.asc",
        label: "По имени (A-Z)",
    },
    {
        value: "name.desc",
        label: "По имени (Z-A)",
    },
    {
        value: "newest",
        label: "Сначала новее",
    },
    {
        value: "oldest",
        label: "Сначала старше",
    },
    {
        value: "price.asc",
        label: "Сначала дешевле",
    },
    {
        value: "price.desc",
        label: "Сначала дороже",
    },
];

const SortSelect: FC<SortSelectProps> = ({ sortMethod, setSortMethod }) => {
    return (
        <div className="flex flex-row items-center gap-[8px]">
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
                className="appearance-none  cursor-pointer text-h4 leading-h4 focus:outline-0 p-[4px] border-black w-[206px]"
            >
                {selectOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortSelect;
