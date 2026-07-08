import Image from "next/image";
import { Reveal } from "./Reveal";

const genres = [
  { name: "Psytrance", djs: 34, seed: "cabine-psytrance-forest" },
  { name: "Techno", djs: 41, seed: "cabine-techno-warehouse" },
  { name: "Tech House", djs: 28, seed: "cabine-techhouse-groove" },
  { name: "House", djs: 23, seed: "cabine-house-classic" },
  { name: "Hard Techno", djs: 17, seed: "cabine-hardtechno-industrial" },
  { name: "Drum & Bass", djs: 14, seed: "cabine-dnb-bass" },
  { name: "Trance", djs: 19, seed: "cabine-trance-uplift" },
  { name: "Progressive", djs: 21, seed: "cabine-progressive-melodic" },
];

export function Genres() {
  return (
    <section id="vertentes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Toda vertente tem dono.
          </h2>
          <p className="mt-4 max-w-lg text-zinc-400">
            Cada estilo tem seu público e seu groove. Escolha a vertente e veja
            quem está com agenda aberta.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {genres.map((genre) => (
            <a
              key={genre.name}
              href="#djs"
              className="group relative h-72 w-56 shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-white/10"
            >
              <Image
                src={`https://picsum.photos/seed/${genre.seed}/448/576`}
                alt={`Vertente ${genre.name}`}
                width={448}
                height={576}
                className="h-full w-full object-cover opacity-60 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-lg font-semibold text-white">
                  {genre.name}
                </div>
                <div className="mt-1 text-[13px] text-zinc-400">
                  {genre.djs} DJs
                </div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
