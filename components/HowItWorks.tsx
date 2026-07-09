import { Reveal } from "./Reveal";

const steps = [
  {
    verb: "Escolha",
    body: "Filtre por vertente, cidade e data. Ouça os sets recentes e veja o cachê antes de qualquer conversa.",
  },
  {
    verb: "Feche",
    body: "Mande a proposta pela plataforma. O DJ aceita, a data trava na agenda e o combinado fica registrado.",
  },
  {
    verb: "Toque",
    body: "O pagamento fica retido e só é liberado depois do evento. Sem calote de nenhum dos lados.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-white/5 bg-panel py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Do match ao palco em três movimentos.
              </h2>
              <p className="mt-4 max-w-sm text-zinc-400">
                Contratar DJ hoje é grupo de WhatsApp, áudio de 4 minutos e
                combinado que ninguém lembra. A CABINE resolve isso.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          {steps.map((step, i) => (
            <Reveal key={step.verb} delay={0.08 * i}>
              <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-brand/30 md:p-10">
                <h3 className="font-display text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-brand">
                  {step.verb}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
