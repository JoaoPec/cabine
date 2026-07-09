import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] h-[560px] w-[560px] rounded-full bg-brand/[0.07] blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 md:px-8 lg:grid-cols-12 lg:pb-28 lg:pt-40">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand">
              Booking de DJs
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              O line-up certo para a sua festa.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400 md:text-lg">
              DJs de psytrance, techno e tech house com agenda aberta. Você
              fala direto com quem toca.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/#djs"
                className="group flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 font-semibold text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Encontrar DJ
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:scale-105">
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

        <div className="relative hidden lg:col-span-5 lg:block">
          <Reveal delay={0.2}>
            <div className="relative h-[520px]">
              <div className="absolute left-0 top-8 w-[300px] -rotate-2 rounded-[1.5rem] border border-white/10 bg-white/5 p-1.5">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&h=760&q=80"
                  alt="Show de música eletrônica com luzes sobre o público"
                  width={600}
                  height={760}
                  priority
                  className="h-[400px] w-full rounded-[calc(1.5rem-0.375rem)] object-cover"
                />
              </div>
              <div className="absolute right-0 top-24 w-[260px] rotate-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-1.5">
                <Image
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=520&h=640&q=80"
                  alt="Mãos do DJ no mixer com iluminação neon"
                  width={520}
                  height={640}
                  priority
                  className="h-[340px] w-full rounded-[calc(1.5rem-0.375rem)] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
