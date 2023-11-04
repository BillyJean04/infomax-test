import Input from "./ui/Input";
import Button from "./ui/Button";
import { FC, forwardRef, memo, RefObject } from "react";

interface SearchProps {
    handleClick: () => void;
    ref: RefObject<HTMLInputElement>;
}

const Search: FC<SearchProps> = memo(
    forwardRef(({ handleClick }, ref) => {
        return (
            <div className="flex flex-row w-full justify-between max-w-[445px] border-[1px] border-gray2 py-[6px] pl-[10px] pr-[4px] rounded-[5px]">
                <Input ref={ref} className="w-full border-none p-0 outline-0" placeholder="Найти авто" />
                <Button onClick={handleClick} variant="default" className="p-[6px]">
                    <img className="w-[12px] h-[12px]" src="/search.svg" alt="search" />
                </Button>
            </div>
        );
    }),
);

Search.displayName = "Search";

export default Search;
