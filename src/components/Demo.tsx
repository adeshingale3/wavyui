import { VariantProps } from "class-variance-authority"
import React, { FC, ReactNode } from "react"

// interface Props{
//     children: ReactNode | ReactNode[]
// }
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
const DemoButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      style={{
        backgroundColor: 'red',
        border: '2px solid black',
        borderRadius: 10,
        padding: '1em',
        
      }}
      onMouseMove={(e) => {
  const btn = e.currentTarget as HTMLButtonElement;
  btn.style.transition = "all 1.2s ease"; // Add this
  btn.style.backgroundColor = "#000";
  btn.style.backgroundPosition = "right";
}}

onMouseOut={(e) => {
  const btn = e.currentTarget as HTMLButtonElement;
  btn.style.transition = "all 1.2s ease"; // Add this again
  btn.style.backgroundColor = "#fff";
  btn.style.backgroundPosition = "left";
}}

      {...props}
    >
      {children}
    </button>
  );
});
export default DemoButton