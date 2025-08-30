import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition transform hover:-translate-y-0.5 active:scale-95";
const styles: Record<Variant, string> = {
  primary: "bg-black text-white hover:opacity-90",
  secondary: "border border-slate-300 hover:border-slate-400",
  ghost: "hover:bg-slate-100",
};

export default function Button({ variant = "primary", href, className = "", children, ...rest }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  return href ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <button className={cls} {...rest}>{children}</button>
  );
}
