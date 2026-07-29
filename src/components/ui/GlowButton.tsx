import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  glow?: boolean;
}

export default function GlowButton({
  children,
  className,
  glow = true,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx("liquid-btn", glow && "liquid-btn-glow", className)}
    >
      <span>{children}</span>
    </button>
  );
}