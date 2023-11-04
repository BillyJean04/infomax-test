import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva("flex items-center justify-center rounded-[5px] transition-colors", {
    variants: {
        variant: {
            default: "text-white bg-blue2 hover:bg-blue3 active:bg-blue4 leading-h4",
            secondary: "text-black bg-gray2",
        },
        size: {
            default: "px-[99px] py-[19px]",
            sm: "px-[26px] py-[9px]",
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, children, ...props }, ref) => {
    return (
        <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
