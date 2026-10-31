import type { EventsContent } from "@/lib/content-schema";
import primaveraTropicale2026 from "./primavera-tropicale-2026.json";
import estateTropicale2026 from "./estate-tropicale-2026.json";

// ponytail: eventi archiviati elencati a mano — per archiviarne un altro,
// copia events.json in un nuovo file qui e aggiungi un import + una riga sotto.
export const ARCHIVED_EVENTS: Record<string, EventsContent> = {
  "primavera-tropicale-2026": primaveraTropicale2026 as EventsContent,
  "estate-tropicale-2026": estateTropicale2026 as EventsContent,
};

export const ARCHIVED_SLUGS = Object.keys(ARCHIVED_EVENTS);
