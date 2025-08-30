import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition select-none";
const variants: Record<Variant, string> = {
  primary: "bg-black text-white hover:opacity-90",
  secondary: "border border-slate-300 hover:border-slate-400",
  ghost: "hover:bg-slate-100",
};
const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) return <a href={href} className={cls}>{rest.children}</a>;
  return <button className={cls} {...rest} />;
}
