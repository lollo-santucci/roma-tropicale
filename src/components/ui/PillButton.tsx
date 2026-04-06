import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  variant?: "primary" | "purple" | "outlined";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

const base =
  "inline-flex items-center justify-center rounded-pill min-h-[44px] min-w-[150px] px-6 py-2.5 text-sm tracking-widest font-medium uppercase transition-all text-center";

const variants = {
  primary: "bg-roma-dark text-roma-white hover:bg-roma-purple",
  purple: "bg-roma-purple text-roma-white hover:bg-roma-purple-light",
  outlined:
    "border border-roma-dark text-roma-dark hover:bg-roma-dark hover:text-roma-white",
} as const;

export default function PillButton({
  variant = "primary",
  href,
  onClick,
  children,
  className,
  rotate,
}: PillButtonProps) {
  const classes = cn(base, variants[variant], className);
  const style = rotate
    ? { transform: `rotate(${rotate}deg)`, transition: "all 0.3s ease" }
    : undefined;

  const onEnter = rotate
    ? (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = "rotate(0deg)"; }
    : undefined;
  const onLeave = rotate
    ? (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = `rotate(${rotate}deg)`; }
    : undefined;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </button>
  );
}
