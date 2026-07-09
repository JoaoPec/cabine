import Link from "next/link";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            A pista está esperando.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-zinc-400">
            Produtores encontram o line-up. DJs encontram palco. Todo mundo
            encontra a pista.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#djs"
              className="group flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 font-semibold text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Encontrar DJ
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/planos"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 active:scale-[0.98]"
            >
              Sou DJ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
