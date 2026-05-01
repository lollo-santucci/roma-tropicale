import Link from "next/link";

const SLUGS: { slug: string; label: string; description: string }[] = [
  { slug: "landing", label: "Landing", description: "Highlights e contenuti della home" },
  { slug: "about", label: "About", description: "Testi, team e card di riferimento" },
  { slug: "events", label: "Events", description: "Festival, workshop, attività, archivio" },
  { slug: "academy", label: "Academy", description: "Programma essentials e educators" },
  { slug: "merch", label: "Merch", description: "Testi, prodotti e card mailto" },
  { slug: "membership", label: "Membership", description: "Testi e benefit dell'iscrizione" },
  { slug: "contacts", label: "Contacts", description: "Copy della pagina contatti" },
  { slug: "shared", label: "Shared", description: "Brand, navigazione, footer, marquee" },
];

export default function AdminIndexPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-tight">Admin Tropicale</h1>
            <p className="mt-1 text-sm text-black/60">
              Scegli una sezione da modificare. Le modifiche vengono committate sul repo e Vercel
              redeploya automaticamente.
            </p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black hover:text-white"
            >
              Logout
            </button>
          </form>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SLUGS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/admin-tropicale/${s.slug}`}
                className="block rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/40 hover:shadow-sm"
              >
                <div className="text-xs uppercase tracking-wide text-black/40">/{s.slug}</div>
                <div className="mt-1 text-lg font-medium">{s.label}</div>
                <p className="mt-1 text-sm text-black/60">{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
