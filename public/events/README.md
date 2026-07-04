# Immagini eventi

Una cartella per evento. Nel JSON un percorso `"/events/..."` = file dentro `public/events/...`
(la `/` iniziale è `public/`, non si scrive `public` nel JSON).

## Dove va ogni immagine

| Campo nel JSON dell'evento | File dentro la cartella dell'evento |
|---|---|
| `heroImage`        | `hero.<ext>` |
| `festivalImage`    | `flyer.<ext>` |
| `logoImage`        | `logo.<ext>` (lascia `""` se non c'è logo) |
| `dates[].image`    | `dates/…` |
| `workshops[].image`| `workshops/…` |
| `activities[].image`| `activities/…` |
| `venueCards[].image`| `venues/…` |

## Regole

- **Nuovo evento = cartella nuova.** Non sovrascrivere i file di un evento archiviato:
  le loro pagine puntano a quei file e cambiarli cambierebbe anche l'archivio.
- Evento **live** (`/events`): i contenuti stanno in `src/content/events.json`, cartella
  immagini qui sotto (es. `nuovo-evento-2026/`).
- Evento **archiviato**: snapshot in `src/content/events-archive/<slug>.json`, immagini in
  `<slug>/` (es. `primavera-tropicale-2026/`).

## Condivise (non legate a un singolo evento)

- `coming-soon-header.jpg` — hero della modalità "coming soon".
- `archive/` — miniature delle card "from the archive" di eventi che vivono su siti esterni.
