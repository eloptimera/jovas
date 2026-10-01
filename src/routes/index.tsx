import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Handshake, Phone, Users } from "lucide-react";
import { GlasCirkel } from "@/components/Brand";
import { Heading, Mark } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import { TJANSTER } from "@/lib/tjanster";

const ARSTAL = new Date().getFullYear() - FORETAG.startar;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Städfirma i Göteborg för företag & fastigheter – Jovos Transport AB" },
      {
        name: "description",
        content:
          "Professionell lokalvård för företag, kontor, fastighetsägare och BRF:er i Göteborg. Kollektivavtal och över 30 års erfarenhet sedan 1995. Få fri offert.",
      },
      {
        property: "og:title",
        content: "Städfirma i Göteborg för företag & fastigheter – Jovos Transport AB",
      },
      {
        property: "og:description",
        content: "Kontorsstädning, fastighetsstädning och lokalvård i Göteborg. Få fri offert.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Start,
});

const TRYGGHET = ["Kollektivavtal", "Verksamma sedan 1995", "F-skatt"] as const;

const FORDELAR = [
  {
    ikon: Handshake,
    titel: "Kollektivavtal",
    text: "Vi har kollektivavtal (Almega Serviceentreprenad). Det visar att vi är en seriös arbetsgivare med schyssta villkor, och det märks i kvaliteten.",
  },
  {
    ikon: BadgeCheck,
    titel: `Över ${Math.floor(ARSTAL / 10) * 10} års erfarenhet`,
    text: `Vi startade ${FORETAG.startar}. Så lång tid i branschen ger stabilitet och trygghet för dig som kund.`,
  },
  {
    ikon: Users,
    titel: "Ett stabilt team",
    text: `Vi är ${FORETAG.anstallda} anställda och har kapacitet för både mindre och större städuppdrag.`,
  },
] as const;

const KORTSTIL = [
  "bg-brand text-white",
  "border-2 border-line bg-white text-ink",
  "bg-ink text-white",
] as const;

function Start() {
  return (
    <>
      {/* Hero */}
      <section className="p-3 sm:px-6">
        <div className="panel-brand relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[2rem]">
          <GlasCirkel
            namn={FORETAG.kortnamn}
            className="pointer-events-none absolute top-1/2 -right-10 -z-10 hidden w-[42rem] -translate-y-1/2 lg:block"
          />
          <div className="px-6 py-16 sm:px-12 sm:py-24 lg:min-h-[min(41rem,calc(100svh-7rem))] lg:px-16 lg:py-28">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.14em] uppercase">
              {FORETAG.ort} · sedan {FORETAG.startar}
            </p>
            <h1 className="font-wide mt-6 max-w-3xl text-[clamp(1.25rem,4vw,3.4rem)] leading-[1.3] uppercase">
              Professionell lokalvård
              <span className="font-display mt-5 block text-[clamp(1.05rem,1.6vw,1.4rem)] leading-snug font-normal tracking-normal text-white/90 normal-case">
                för företag och fastigheter i {FORETAG.ort}
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90">
              Kontorsstädning, trapphusstädning och lokalvård för företag, fastighetsägare och
              BRF:er. Skicka en förfrågan så återkommer vi med fri offert.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/offert" className="btn-base btn-white">
                Få fri offert
              </Link>
              {FORETAG.telefon ? (
                <a href={`tel:${FORETAG.telefonLank}`} className="btn-base btn-outline-white">
                  <Phone className="size-4" aria-hidden="true" />
                  {FORETAG.telefon}
                </a>
              ) : (
                <Link to="/kontakt" className="btn-base btn-outline-white">
                  Kontakta oss
                </Link>
              )}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/85">
              {TRYGGHET.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-sun" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>

            <GlasCirkel
              namn={FORETAG.kortnamn}
              className="pointer-events-none relative mx-auto mt-12 w-full max-w-[22rem] lg:hidden"
            />
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section id="tjanster" className="container-page py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Tjänster</p>
          <Heading className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Lokalvård för <Mark>företag</Mark> och fastigheter
          </Heading>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TJANSTER.map((t, i) => (
            <Reveal key={t.id} delay={i * 70}>
              <Link
                to="/tjanster"
                hash={t.id}
                className={`group flex h-full min-h-[18rem] flex-col justify-between rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${KORTSTIL[i]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-full bg-white/20 ring-1 ring-current/15">
                    <t.ikon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-white text-brand transition-colors group-hover:bg-sun group-hover:text-ink">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-3xl">{t.titel}</h3>
                  <p className="mt-3 leading-relaxed opacity-90">{t.kort}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Varför Jovos */}
      <section className="bg-fade-tint py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Varför {FORETAG.kortnamn}</p>
            <Heading className="mt-4 max-w-2xl text-4xl sm:text-5xl">
              Trygghet efter <Mark>{ARSTAL} år</Mark> i branschen
            </Heading>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {FORDELAR.map((f, i) => (
              <Reveal key={f.titel} delay={i * 80}>
                <article className="h-full rounded-[2rem] bg-white p-8 shadow-sm shadow-brand/10">
                  <span className="grid size-14 place-items-center rounded-full bg-brand text-white">
                    <f.ikon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl">{f.titel}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="eyebrow">Om {FORETAG.kortnamn}</p>
          <Heading className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Göteborgs städfirma sedan <Mark>{FORETAG.startar}</Mark>
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {FORETAG.namn} är ett lokalvårdsbolag med säte i {FORETAG.ort}. Vi tar hand om
            kontorsstädning, fastighetsstädning och övrig lokalvård för företag, fastighetsägare och
            organisationer.
          </p>
          <Link to="/om-oss" className="btn-base btn-outline mt-8">
            Läs mer om oss
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-4">
            <div className="rounded-[2rem] bg-brand p-6 text-white">
              <dt className="text-xs font-bold tracking-[0.14em] text-white/85 uppercase">
                Verksamma sedan
              </dt>
              <dd className="mt-3 font-display text-4xl sm:text-5xl">{FORETAG.startar}</dd>
            </div>
            <div className="rounded-[2rem] bg-ink p-6 text-white">
              <dt className="text-xs font-bold tracking-[0.14em] text-sun uppercase">Säte</dt>
              <dd className="mt-3 font-display text-2xl sm:text-4xl">{FORETAG.ort}</dd>
            </div>
            <div className="col-span-2 rounded-[2rem] bg-tint p-6">
              <dt className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
                Anställda
              </dt>
              <dd className="mt-3 font-display text-3xl text-ink">{FORETAG.anstallda}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Avslutande CTA */}
      <section className="p-3 pt-0 sm:px-6">
        <Reveal>
          <div className="panel-brand relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] px-6 py-16 sm:px-14 sm:py-24">
            <GlasCirkel
              namn={FORETAG.kortnamn}
              className="pointer-events-none absolute top-1/2 -right-4 -z-10 hidden w-[28rem] -translate-y-1/2 opacity-80 lg:block"
            />
            <h2 className="font-wide max-w-2xl text-[clamp(1.5rem,3.4vw,2.8rem)] leading-[1.3] uppercase">
              Redo för <Mark>rena</Mark> lokaler?
            </h2>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/offert" className="btn-base btn-white">
                Få fri offert
              </Link>
              <Link to="/kontakt" className="btn-base btn-outline-white">
                Kontakta oss
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
