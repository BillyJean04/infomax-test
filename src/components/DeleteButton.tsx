import { FC, useState } from "react";
import Button from "./ui/Button";
import { useAppDispatch } from "../redux/hooks";
import { deleteFavorite } from "../redux/features/favorite/favoriteSlice";

interface DeleteButton {
    cardId: number;
}

const DeleteButton: FC<DeleteButton> = ({ cardId }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    return (
        <Button
            className="flex p-[17px]"
            onClick={() => dispatch(deleteFavorite(cardId))}
            variant="delete"
            size="delete"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                {!isHover ? (
                    <>
                        <path
                            d="M2 17C2 18.103 2.897 19 4 19H14C15.103 19 16 18.103 16 17V5H2V17ZM4 7H14L14.002 17H4V7Z"
                            fill="#D73737"
                        />
                        <path d="M12 2V0H6V2H0V4H18V2H12Z" fill="#D73737" />
                        <path d="M8 9H6V15H8V9Z" fill="#D73737" />
                        <path d="M12 9H10V15H12V9Z" fill="#D73737" />
                    </>
                ) : (
                    <>
                        <path
                            d="M2 17C2 18.103 2.897 19 4 19H14C15.103 19 16 18.103 16 17V5H2V17ZM4 7H14L14.002 17H4V7Z"
                            fill="white"
                        />
                        <path d="M12 2V0H6V2H0V4H18V2H12Z" fill="white" />
                        <path d="M8 9H6V15H8V9Z" fill="white" />
                        <path d="M12 9H10V15H12V9Z" fill="white" />
                    </>
                )}
            </svg>
        </Button>
    );
};

export default DeleteButton;
