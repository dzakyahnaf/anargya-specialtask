import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2 bg-transparent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline",
      },
      color: {
        primary: "",
        destructive: "",
        secondary: "",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm font-bold",
        sm: "h-9 px-3 text-xs font-bold",
        lg: "h-11 px-8 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      // Primary Solid
      {
        variant: "solid",
        color: "primary",
        className:
          "text-white active:scale-[0.98] border-2 border-green-100" +
          " bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.800),theme(colors.green.400))]" +
          " bg-[length:200%_100%] bg-left hover:bg-right" +
          " transition-[background-position] duration-500 ease-in-out",
      },
      // Secondary Solid
      {
        variant: "solid",
        color: "secondary",
        className:
          "active:scale-[0.98]" +
          " bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.green.300),theme(colors.green.200))]" +
          " bg-[length:200%_100%] bg-left hover:bg-right" +
          " transition-[background-position] duration-500 ease-in-out",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const safeColor = color ?? undefined;
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, color: safeColor, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
