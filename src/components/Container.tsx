import { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={cn("container mx-auto flex flex-col", className)}>{children}</div>;
};

export default Container;
