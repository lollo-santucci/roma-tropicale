import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

interface NewsletterFormProps {
  variant?: "compact" | "full";
  className?: string;
}

export default function NewsletterForm({
  variant = "compact",
  className,
}: NewsletterFormProps) {
  if (variant === "full") {
    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <h2 className="text-xl sm:text-2xl font-medium text-roma-white">
          Newsletter
        </h2>
        <p className="text-xs text-roma-white/40 leading-relaxed text-center max-w-sm">
          Scriviamo — raramente — di piante, eventi, vivai, appuntamenti da non
          perdere e piccole scoperte botaniche.
        </p>
        <Link
          href={BRAND.newsletterForm}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-pill bg-roma-white text-roma-dark px-10 py-3 text-xs uppercase tracking-widest font-medium hover:bg-roma-white/80 transition-colors"
        >
          Subscribe
        </Link>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Link
        href={BRAND.newsletterForm}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-pill bg-roma-purple text-roma-white px-6 py-2.5 text-xs font-medium uppercase tracking-widest hover:bg-roma-purple-light transition-colors"
      >
        Subscribe
      </Link>
    </div>
  );
}
