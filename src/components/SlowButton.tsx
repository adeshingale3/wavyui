
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "bg-gradient-to-r from-white to-black text-white bg-[length:400%_auto] bg-right border border-white hover:bg-left transition-all duration-1200 hover:text-black px-6 py-3 rounded-3xl hover:border-black",
  
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const SlowButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants())}
        ref={ref}
        {...props}
      />
    )
  }
)
SlowButton.displayName = "SlowButton"

export { SlowButton, buttonVariants }


