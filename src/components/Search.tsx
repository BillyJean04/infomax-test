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
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 11.139L8.7167 7.85508C9.37921 7.00502 9.74273 5.96681 9.74273 4.87137C9.74273 3.5701 9.23611 2.34678 8.31542 1.42731C7.39535 0.506622 6.17263 0 4.87137 0C3.5701 0 2.34739 0.506622 1.42731 1.42731C0.507227 2.34678 0 3.5701 0 4.87137C0 6.17263 0.507227 7.39595 1.42731 8.31542C2.34739 9.23611 3.5701 9.74273 4.87137 9.74273C5.96681 9.74273 7.00502 9.37981 7.85507 8.71609L11.139 11.9994L12 11.139ZM4.87137 8.52489C3.89587 8.52489 2.97823 8.14492 2.28832 7.45502C1.59781 6.76511 1.21784 5.84686 1.21784 4.87137C1.21784 3.89587 1.59781 2.97823 2.28832 2.28832C2.97823 1.59781 3.89587 1.21784 4.87137 1.21784C5.84686 1.21784 6.7645 1.59781 7.45441 2.28832C8.14493 2.97823 8.52489 3.89587 8.52489 4.87137C8.52489 5.84686 8.14493 6.76511 7.45441 7.45502C6.7645 8.14492 5.84686 8.52489 4.87137 8.52489Z"
                            fill="white"
                        />
                    </svg>
                </Button>
            </div>
        );
    }),
);

Search.displayName = "Search";

export default Search;
