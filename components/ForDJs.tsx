import Image from "next/image";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Perfil gratuito",
    body: "Foto, bio, vertentes, sets e agenda. Seu press kit vira um link.",
  },
  {
    title: "Cachê é seu",
    body: "Você define o valor e recebe integral. A taxa de serviço é do contratante.",
  },
  {
    title: "Agenda travada",
    body: "Data aceita é data bloqueada. Nada de dois eventos na mesma noite.",
  },
];

export function ForDJs() {
  return (
    <section id="para-djs" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2">
                <Image
                  src="https://picsum.photos/seed/cabine-dj-crowd-hands/900/1080"
                  alt="DJ tocando para o público de mãos levantadas"
                  width={900}
                  height={1080}
                  className="h-[420px] w-full rounded-[calc(2rem-0.5rem)] object-cover md:h-[520px]"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                Para o DJ, custa{" "}
                <span className="text-acid">zero</span>. Sempre.
              </h2>
              <p className="mt-6 max-w-md text-zinc-400">
                Sem mensalidade, sem porcentagem sobre o seu cachê, sem
                pegadinha no contrato. Nosso dinheiro vem da taxa de serviço
                paga por quem contrata.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-6">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={0.08 * i}>
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-zinc-400">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href="#contato"
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-acid/40 py-2 pl-6 pr-2 font-semibold text-acid transition-colors duration-500 hover:bg-acid/10 active:scale-[0.98]"
              >
                Sou DJ
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-acid/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
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
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
