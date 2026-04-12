import { cn } from "@/lib/utils";
import PillButton from "@/components/ui/PillButton";
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
        <PillButton
          href={BRAND.newsletterForm}
          className="bg-[#f3f0f0] text-black hover:bg-roma-purple hover:text-white px-10 py-3"
        >
          Subscribe
        </PillButton>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <PillButton
        href={BRAND.newsletterForm}
        className="bg-[#f3f0f0] text-black hover:bg-roma-purple hover:text-white px-6 py-2.5"
      >
        Subscribe
      </PillButton>
    </div>
  );
}
