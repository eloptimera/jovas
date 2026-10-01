import type { ElementType, ReactNode } from "react";
import { GlasCirkel } from "@/components/Brand";
import { FORETAG } from "@/lib/foretag";

export function Heading({
  as: Tag = "h2",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={className}>{children}</Tag>;
}

/** Markerat ord – gul understrykning (en riktig text-underline). */
export function Mark({ children, nowrap = false }: { children: ReactNode; nowrap?: boolean }) {
  return (
    <span
      className={`underline decoration-sun decoration-[0.09em] underline-offset-[0.12em] [text-decoration-skip-ink:none] ${
        nowrap ? "whitespace-nowrap" : ""
      }`}
    >
      {children}
    </span>
  );
}

/** Sidhuvud för undersidor: teal panel med glasig cirkel. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="p-3 sm:px-6">
      <div className="panel-brand relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[2rem]">
        <GlasCirkel
          namn={FORETAG.kortnamn}
          notiser={["Kollektivavtal", `Sedan ${FORETAG.startar}`, "Kontor & fastigheter"]}
          className="pointer-events-none absolute top-1/2 -right-6 -z-10 hidden w-[32rem] -translate-y-1/2 opacity-80 lg:block"
        />
        <div className="px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.14em] uppercase">
            {eyebrow}
          </p>
          <h1 className="font-wide mt-6 max-w-3xl text-[clamp(1.5rem,3.6vw,3rem)] leading-[1.3] uppercase">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
