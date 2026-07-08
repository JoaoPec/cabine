import Image from "next/image";
import { Reveal } from "./Reveal";

type DJ = {
  artist: string;
  name: string;
  genre: string;
  city: string;
  fee: string;
  seed: string;
  featured?: boolean;
};

const djs: DJ[] = [
  {
    artist: "KAORA",
    name: "Marina Yamauchi",
    genre: "Psytrance",
    city: "Alto Paraíso, GO",
    fee: "R$ 2.400",
    seed: "cabine-kaora-forest-stage",
    featured: true,
  },
  {
    artist: "VĒLA",
    name: "Bárbara Antunes",
    genre: "Melodic Techno",
    city: "São Paulo, SP",
    fee: "R$ 1.800",
    seed: "cabine-vela-melodic",
  },
  {
    artist: "RÜDIGER",
    name: "Rodrigo Kruger",
    genre: "Hard Techno",
    city: "Curitiba, PR",
    fee: "R$ 2.100",
    seed: "cabine-rudiger-industrial",
  },
  {
    artist: "MALTA",
    name: "Caio Malta",
    genre: "Tech House",
    city: "Florianópolis, SC",
    fee: "R$ 1.600",
    seed: "cabine-malta-beach",
  },
  {
    artist: "DANDARA",
    name: "Dandara Reis",
    genre: "House",
    city: "Salvador, BA",
    fee: "R$ 1.500",
    seed: "cabine-dandara-sunset",
  },
  {
    artist: "SUBSOLO",
    name: "Ian Prado",
    genre: "Drum & Bass",
    city: "Belo Horizonte, MG",
    fee: "R$ 1.900",
    seed: "cabine-subsolo-bass",
  },
];

function DJCard({ dj }: { dj: DJ }) {
  return (
    <a
      href="#contato"
      className="group relative block h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-panel"
    >
      <div className={`relative ${dj.featured ? "h-72 md:h-[420px]" : "h-56"}`}>
        <Image
          src={`https://picsum.photos/seed/${dj.seed}/800/640`}
          alt={`${dj.artist}, DJ de ${dj.genre}`}
          width={800}
          height={640}
          className="h-full w-full object-cover opacity-70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04] group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={`font-display font-bold tracking-tight text-white ${
                dj.featured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              {dj.artist}
            </h3>
            <p className="mt-1 text-[13px] text-zinc-500">{dj.name}</p>
          </div>
          <span className="mt-1 shrink-0 rounded-full border border-acid/30 bg-acid/10 px-3 py-1 text-[11px] font-medium text-acid">
            {dj.genre}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-[13px]">
          <span className="text-zinc-400">{dj.city}</span>
          <span className="text-zinc-300">
            cachê a partir de{" "}
            <strong className="font-semibold text-white">{dj.fee}</strong>
          </span>
        </div>
      </div>
    </a>
  );
}

export function Roster() {
  return (
    <section id="djs" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Quem está na cabine.
              </h2>
              <p className="mt-4 max-w-lg text-zinc-400">
                Perfil verificado, sets recentes e cachê na mesa. Sem
                intermediário no ouvido.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {djs.map((dj, i) => (
            <Reveal key={dj.artist} delay={0.05 * i} className={dj.featured ? "md:col-span-2 md:row-span-2" : ""}>
              <DJCard dj={dj} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
