import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            className={cn(
                "border-[1px] border-gray2 py-[8.5px] px-[10px] rounded-[5px] text-p placeholder:text-gray2",
                className,
            )}
            {...props}
        />
    );
});

Input.displayName = "Input";

export default Input;
