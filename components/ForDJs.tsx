import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "pra sempre",
    description: "Perfil básico pra quem está começando. Link público com seu artista, vertente e contato direto.",
    features: [
      "Perfil público com nome artístico e vertente",
      "Cidade e estado",
      "Link de contato direto (WhatsApp ou e-mail)",
      "Aparece nas buscas por vertente",
    ],
    cta: "Criar perfil grátis",
    accent: "border-white/20",
    bg: "bg-transparent",
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description: "Perfil completo pra quem toca com frequência. Fotos, agenda, redes sociais e formulário de orçamento.",
    features: [
      "Tudo do plano Gratuito",
      "Até 8 fotos no perfil",
      "Vídeos e sets embedados (YouTube/SoundCloud)",
      "Agenda de datas disponíveis",
      "Links para redes sociais (Instagram, Spotify...)",
      "Formulário de orçamento direto no perfil",
      "Selo de perfil destacado nas buscas",
    ],
    cta: "Assinar Pro",
    accent: "border-brand/40",
    bg: "bg-brand/5",
    featured: true,
  },
  {
    name: "Premium",
    price: "R$ 79",
    period: "/mês",
    description: "Máxima visibilidade pra quem vive de tocar. Destaque nas buscas, selo verificado e estatísticas.",
    features: [
      "Tudo do plano Pro",
      "Destaque prioritário nas buscas por vertente",
      "Selo de perfil verificado (check azul)",
      "Estatísticas de visitas ao perfil",
      "Até 16 fotos no perfil",
      "Suporte prioritário (resposta em até 4h)",
      "Posição fixa no topo da vertente principal",
    ],
    cta: "Assinar Premium",
    accent: "border-amber-400/50",
    bg: "bg-amber-400/5",
  },
];

export function ForDJs() {
  return (
    <section id="para-djs" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Planos que cabem no seu{" "}
              <span className="text-brand">bolso</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Do gratuito ao premium. Escolha o plano certo pro seu momento e
              comece a receber propostas de booking direto no seu perfil.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.08 * i}>
              <div
                className={`relative flex h-full flex-col rounded-[1.5rem] border ${plan.accent} ${plan.bg} p-6 md:p-8 ${
                  plan.featured
                    ? "ring-1 ring-brand/20 md:scale-[1.04]"
                    : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-semibold text-ink">
                    Mais popular
                  </span>
                )}

                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-zinc-500">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/5 pt-6">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-[13px] text-zinc-300"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-0.5 shrink-0"
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={plan.featured ? "text-brand" : "text-zinc-500"}
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`mt-8 flex w-full items-center justify-center rounded-full border py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "border-transparent bg-brand text-ink hover:bg-brand/90 active:scale-[0.98]"
                      : "border-white/15 text-white hover:border-white/40 active:scale-[0.98]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-md text-center text-[13px] text-zinc-500">
            Sem contrato de fidelidade. Cancele quando quiser. Ao assinar você
            concorda com nossos termos de uso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
