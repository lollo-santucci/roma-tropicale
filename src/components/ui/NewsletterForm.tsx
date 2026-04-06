"use client";

import { cn } from "@/lib/utils";

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className={cn("flex flex-col items-center gap-4", className)}
      >
        <h2 className="text-xl sm:text-2xl font-medium text-roma-white">
          Newsletter
        </h2>
        <p className="text-xs text-roma-white/40 leading-relaxed text-center max-w-sm">
          Scriviamo — raramente — di piante, eventi, vivai, appuntamenti da non
          perdere e piccole scoperte botaniche.
        </p>
        <input
          type="email"
          placeholder="La tua email"
          aria-label="Email"
          className="w-full max-w-sm rounded-pill bg-roma-white/10 px-5 py-3 text-sm text-roma-white placeholder:text-roma-white/40 focus:outline-none focus:ring-1 focus:ring-roma-white/30 transition-colors"
        />
        <button
          type="submit"
          className="rounded-pill bg-roma-white text-roma-dark px-10 py-3 text-xs uppercase tracking-widest font-medium hover:bg-roma-white/80 transition-colors"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={cn("flex gap-2", className)}
    >
      <input
        type="email"
        placeholder="La tua email"
        aria-label="Email"
        className="flex-1 rounded-pill bg-roma-white/10 px-4 py-2 text-xs text-roma-white placeholder:text-roma-white/40 focus:outline-none focus:ring-1 focus:ring-roma-white/30 transition-colors"
      />
      <button
        type="submit"
        className="rounded-pill bg-roma-purple text-roma-white px-4 py-2 text-xs font-medium hover:bg-roma-purple-light transition-colors"
      >
        GO
      </button>
    </form>
  );
}
