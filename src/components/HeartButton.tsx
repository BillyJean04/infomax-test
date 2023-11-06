import { FC, useCallback, useState } from "react";
import * as path from "path";
import { useFavorite } from "../hooks/useFavorite";

interface HeartButtonProps {
    cardId: number;
    disabled: boolean;
}

const HeartButton: FC<HeartButtonProps> = ({ cardId, disabled = false }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const { hasFavorited, toggleFavorite } = useFavorite(cardId);

    const getButtonState = useCallback(() => {
        if (disabled) {
            return "disabled";
        } else if (hasFavorited) {
            return "pressed";
        } else if (isHover) {
            return "hover";
        } else {
            return "default";
        }
    }, [hasFavorited, isHover]);
    const renderHeart = () => {
        switch (getButtonState()) {
            case "pressed":
                return (
                    <path
                        d="M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12Z"
                        fill="#240C86"
                    />
                );
            case "hover":
                return (
                    <path
                        d="M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12Z"
                        fill="#4F2CD9"
                    />
                );
            case "disabled":
                return (
                    <path
                        d="M7.25 12C7.112 12 6.97398 11.9618 6.85248 11.886C6.59298 11.724 0.5 7.86825 0.5 3.75C0.5 1.68225 2.18225 0 4.25 0C5.4455 0 6.55325 0.627717 7.25 1.55997C7.94675 0.627717 9.0545 0 10.25 0C12.3177 0 14 1.68225 14 3.75C14 7.86825 7.90702 11.724 7.64752 11.886C7.52602 11.9618 7.388 12 7.25 12ZM4.25 1.5C3.0095 1.5 2 2.5095 2 3.75C2 6.27225 5.48225 9.15527 7.25 10.3545C9.01775 9.15527 12.5 6.273 12.5 3.75C12.5 2.5095 11.4905 1.5 10.25 1.5C8.98325 1.5 8 2.70975 8 3.75C8 4.164 7.664 4.5 7.25 4.5C6.836 4.5 6.5 4.164 6.5 3.75C6.5 2.70975 5.51675 1.5 4.25 1.5Z"
                        fill="#D9D9D9"
                    />
                );
            default:
                return (
                    <path
                        d="M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12ZM3.75 1.5C2.5095 1.5 1.5 2.5095 1.5 3.75C1.5 6.27225 4.98225 9.15527 6.75 10.3545C8.51775 9.15527 12 6.273 12 3.75C12 2.5095 10.9905 1.5 9.75 1.5C8.48325 1.5 7.5 2.70975 7.5 3.75C7.5 4.164 7.164 4.5 6.75 4.5C6.336 4.5 6 4.164 6 3.75C6 2.70975 5.01675 1.5 3.75 1.5Z"
                        fill="black"
                    />
                );
        }
    };

    return (
        <div
            className="flex"
            onClick={toggleFavorite}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <svg
                className="cursor-pointer"
                width="27"
                height="24"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {renderHeart()}
            </svg>
        </div>
    );
};

export default HeartButton;
