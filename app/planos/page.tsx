import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const plans = [
  {
    name: "Gratuito",
    slug: "gratuito",
    price: "R$ 0",
    period: "pra sempre",
    description:
      "Comece a divulgar seu trabalho sem gastar nada. Perfil público com nome artístico, vertente e link de contato direto.",
    features: [
      { name: "Perfil público", gratis: true, pro: true, premium: true },
      { name: "Nome artístico e vertente", gratis: true, pro: true, premium: true },
      { name: "Cidade e estado", gratis: true, pro: true, premium: true },
      { name: "Link de contato (WhatsApp/e-mail)", gratis: true, pro: true, premium: true },
      { name: "Aparece nas buscas por vertente", gratis: true, pro: true, premium: true },
      { name: "Fotos no perfil (até 8)", gratis: false, pro: true, premium: true },
      { name: "Vídeos e sets embedados", gratis: false, pro: true, premium: true },
      { name: "Agenda de datas disponíveis", gratis: false, pro: true, premium: true },
      { name: "Redes sociais no perfil", gratis: false, pro: true, premium: true },
      { name: "Formulário de orçamento", gratis: false, pro: true, premium: true },
      { name: "Selo de perfil destacado", gratis: false, pro: true, premium: true },
      { name: "Destaque prioritário nas buscas", gratis: false, pro: false, premium: true },
      { name: "Selo verificado (check azul)", gratis: false, pro: false, premium: true },
      { name: "Estatísticas de visitas", gratis: false, pro: false, premium: true },
      { name: "Fotos no perfil (até 16)", gratis: false, pro: false, premium: true },
      { name: "Suporte prioritário (até 4h)", gratis: false, pro: false, premium: true },
    ],
  },
];

const cards = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "pra sempre",
    description:
      "Perfil básico pra quem está começando. Link público com seu artista, vertente e contato.",
    accent: "border-white/20",
    bg: "bg-transparent",
    cta: "Criar perfil grátis",
    ctaClass: "border-white/15 text-white hover:border-white/40",
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description:
      "Perfil completo pra quem toca com frequência. Fotos, agenda, redes e formulário de orçamento.",
    accent: "border-acid/40 ring-1 ring-acid/20 md:scale-[1.04]",
    bg: "bg-acid/5",
    cta: "Assinar Pro",
    ctaClass: "bg-acid text-ink hover:bg-acid/90",
    featured: true,
  },
  {
    name: "Premium",
    price: "R$ 79",
    period: "/mês",
    description:
      "Máxima visibilidade pra quem vive de tocar. Selo verificado, destaque no topo e estatísticas.",
    accent: "border-amber-400/50",
    bg: "bg-amber-400/5",
    cta: "Assinar Premium",
    ctaClass: "bg-amber-400 text-ink hover:bg-amber-400/90",
  },
];

const faq = [
  {
    q: "Tem contrato de fidelidade?",
    a: "Nenhum. Você pode cancelar a qualquer momento e volta pro plano Gratuito. Sem multa, sem letra miúda.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "Cobrança mensal automática no cartão de crédito via Stripe. Você recebe um recibo por e-mail a cada pagamento.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Pode sim. O upgrade é imediato. Se baixar de plano, a mudança vale a partir da próxima cobrança.",
  },
  {
    q: "O que acontece se eu cancelar?",
    a: "Seu perfil vira Gratuito. Você perde os benefícios do plano pago mas mantém seu perfil e contato básico no ar.",
  },
  {
    q: "A Cabine fica com porcentagem do meu cachê?",
    a: "Não. O cachê é 100% seu. A receita da Cabine vem exclusivamente das assinaturas dos DJs. O contratante não paga taxa extra.",
  },
  {
    q: "Preciso de CNPJ pra assinar?",
    a: "Não. Qualquer DJ pode assinar como pessoa física. Basta ter mais de 18 anos.",
  },
];

export default function PlanosPage() {
  return (
    <main>
      <Nav />

      {/* Hero da página de planos */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-20%] h-[560px] w-[560px] rounded-full bg-acid/[0.07] blur-3xl"
        />
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <Reveal>
            <span className="inline-block rounded-full border border-acid/30 bg-acid/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-acid">
              Planos
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Escolha o plano certo pro seu{" "}
              <span className="text-acid">momento</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg text-zinc-400">
              Do gratuito ao premium. Fotos, agenda, formulário de orçamento e
              destaque nas buscas. Cancele quando quiser.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cards de plano */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-8">
          {cards.map((plan, i) => (
            <Reveal key={plan.name} delay={0.08 * i}>
              <div
                className={`relative flex h-full flex-col rounded-[1.5rem] border ${plan.accent} ${plan.bg} p-6 md:p-8`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-acid px-4 py-1 text-[11px] font-semibold text-ink">
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

                <a
                  href="#contato"
                  className={`mt-6 flex w-full items-center justify-center rounded-full border py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${plan.ctaClass}`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tabela comparativa */}
      <section className="border-y border-white/5 bg-panel py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Compare os planos.
            </h2>
            <p className="mt-4 max-w-lg text-zinc-400">
              Veja exatamente o que cada plano oferece. Sem letra miúda, sem
              pegadinha.
            </p>
          </Reveal>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 pr-6 font-display text-base font-semibold text-white">
                    Funcionalidade
                  </th>
                  <th className="pb-4 px-4 text-center font-display text-base font-semibold text-zinc-400">
                    Gratuito
                  </th>
                  <th className="pb-4 px-4 text-center font-display text-base font-semibold text-acid">
                    Pro
                  </th>
                  <th className="pb-4 pl-4 text-center font-display text-base font-semibold text-amber-400">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feat, i) => (
                  <tr
                    key={feat.name}
                    className={`border-b border-white/5 ${
                      i % 2 === 0 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="py-3.5 pr-6 text-zinc-300">{feat.name}</td>
                    <td className="py-3.5 px-4 text-center">
                      <Check value={feat.gratis} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Check value={feat.pro} highlight />
                    </td>
                    <td className="py-3.5 pl-4 text-center">
                      <Check value={feat.premium} highlight amber />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Dúvidas?
            </h2>
            <p className="mt-4 text-zinc-400">
              Se não encontrou o que procurava, é só chamar no e-mail.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-6">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={0.05 * i}>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Comece de <span className="text-acid">graça</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">
              Crie seu perfil agora e comece a receber propostas de booking.
              Upgrade quando quiser.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contato"
                className="group flex items-center gap-3 rounded-full bg-acid py-2 pl-6 pr-2 font-semibold text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Criar perfil grátis
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
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Check({
  value,
  highlight,
  amber,
}: {
  value: boolean;
  highlight?: boolean;
  amber?: boolean;
}) {
  if (!value) {
    return <span className="text-zinc-600">—</span>;
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      className={`mx-auto ${amber ? "text-amber-400" : highlight ? "text-acid" : "text-zinc-500"}`}
    >
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
