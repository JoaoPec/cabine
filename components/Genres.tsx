import Image from "next/image";
import { Reveal } from "./Reveal";

const genres = [
  { name: "Psytrance", djs: 34, photo: "photo-1533174072545-7a4b6ad7a6c3" },
  { name: "Techno", djs: 41, photo: "photo-1493673272479-a20888bcee10" },
  { name: "Tech House", djs: 28, photo: "photo-1429962714451-bb934ecdc4ec" },
  { name: "House", djs: 23, photo: "photo-1501281668745-f7f57925c3b4" },
  { name: "Hard Techno", djs: 17, photo: "photo-1563841930606-67e2bce48b78" },
  { name: "Drum & Bass", djs: 14, photo: "photo-1501386761578-eac5c94b800a" },
  { name: "Trance", djs: 19, photo: "photo-1516450360452-9312f5e86fc7" },
  { name: "Progressive", djs: 21, photo: "photo-1470225620780-dba8ba36b745" },
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
                src={`https://images.unsplash.com/${genre.photo}?auto=format&fit=crop&w=448&h=576&q=80`}
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
