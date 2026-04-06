import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  variant?: "primary" | "purple" | "outlined";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center rounded-pill min-h-[44px] px-6 py-2.5 text-sm tracking-widest font-medium uppercase transition-colors";

const variants = {
  primary: "bg-roma-dark text-roma-white hover:opacity-80",
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
}: PillButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
