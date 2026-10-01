import { FORETAG } from "@/lib/foretag";

/** Ordbild: JOVOS i bred versal. */
export function Logo({ ljus = false, className = "" }: { ljus?: boolean; className?: string }) {
  return (
    <span
      className={`font-wide text-lg tracking-[0.12em] uppercase ${ljus ? "text-white" : "text-ink"} ${className}`}
    >
      <span aria-hidden="true">{FORETAG.kortnamn}</span>
      <span className="sr-only">{FORETAG.namn}</span>
    </span>
  );
}

const SKIVOR = [
  { left: "30%", width: "10%" },
  { left: "47%", width: "8%" },
  { left: "62%", width: "12%" },
] as const;

const MASK = "radial-gradient(circle at 50% 50%, #000 58%, transparent 70%)";

/**
 * Glasig cirkel med vertikala skivor och varumärket i mitten.
 * Rent dekorativ – texten finns i klartext på sidan, så allt döljs för skärmläsare.
 */
export function GlasCirkel({ namn, className = "" }: { namn: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`aspect-square ${className}`}>
      <div className="absolute inset-0" style={{ maskImage: MASK, WebkitMaskImage: MASK }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 58% 50%, #0b8272 0%, #0d6e62 34%, #2fb59b 66%, #cdf2e8 100%)",
          }}
        />
        {SKIVOR.map((s) => (
          <div
            key={s.left}
            className="absolute inset-y-0"
            style={{
              left: s.left,
              width: s.width,
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              backgroundImage:
                "linear-gradient(90deg, rgb(255 255 255 / 0), rgb(255 255 255 / 0.3) 45%, rgb(255 255 255 / 0.05))",
            }}
          />
        ))}
      </div>

      <p className="font-wide absolute top-1/2 left-[56%] -translate-x-1/2 -translate-y-1/2 text-[clamp(1.5rem,3.4vw,3rem)] tracking-[0.08em] text-white uppercase drop-shadow-sm">
        {namn}
      </p>
    </div>
  );
}
