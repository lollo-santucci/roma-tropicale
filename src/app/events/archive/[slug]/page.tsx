import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import { EventsActive } from "@/components/sections/EventsSection";
import { ARCHIVED_EVENTS, ARCHIVED_SLUGS } from "@/content/events-archive";

interface ArchivedEventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARCHIVED_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArchivedEventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = ARCHIVED_EVENTS[slug];

  if (!event) {
    return { title: "Evento non trovato — Roma Tropicale" };
  }

  const title = `${event.texts.title} — Roma Tropicale`;
  const description = event.texts.intro[0];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "it_IT",
      siteName: "Roma Tropicale",
    },
    alternates: {
      canonical: `/events/archive/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArchivedEventPage({ params }: ArchivedEventPageProps) {
  const { slug } = await params;
  const event = ARCHIVED_EVENTS[slug];

  if (!event) {
    notFound();
  }

  return (
    <PageShell>
      <EventsActive event={event} archived />
    </PageShell>
  );
}
