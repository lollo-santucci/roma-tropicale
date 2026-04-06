import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import WorkshopSection from "@/components/sections/WorkshopSection";
import { EVENT_WORKSHOPS } from "@/lib/constants";

interface WorkshopPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EVENT_WORKSHOPS.map((ws) => ({ slug: ws.slug }));
}

export async function generateMetadata({ params }: WorkshopPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workshop = EVENT_WORKSHOPS.find((ws) => ws.slug === slug);

  if (!workshop) {
    return { title: "Workshop non trovato — Roma Tropicale" };
  }

  return {
    title: `${workshop.title} — Roma Tropicale`,
    description: workshop.description[0],
    openGraph: {
      title: `${workshop.title} — Roma Tropicale`,
      description: workshop.description[0],
      type: "website",
      locale: "it_IT",
      siteName: "Roma Tropicale",
    },
    alternates: {
      canonical: `/events/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
  const { slug } = await params;
  const workshop = EVENT_WORKSHOPS.find((ws) => ws.slug === slug);

  if (!workshop) {
    notFound();
  }

  return (
    <PageShell>
      <WorkshopSection workshop={workshop} />
    </PageShell>
  );
}
